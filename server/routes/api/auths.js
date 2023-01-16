//packages
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
//imports
const User = require("../../models/user");
const OTPverification = require("../../models/OTPverification");
const sendOTPVerificatonEmail = require("../../verification/sendOTPVerificationEmail");

//Log in

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log(user);
    if (!user)
      return res.status(401).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.dataValues.password_digest
    );

    if (!validPassword)
      return res.status(401).json({ message: "Authentication failed" });

    if (user.dataValues.is_admin) {
      //Poslati na dodatan authentication & 6-digit code verify
      sendOTPVerificatonEmail(user, res);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.send(error);
  }
});

router.post("/register", async (req, res) => {
  const emailTaken = await User.findOne({ where: { email: req.body.email } });

  if (emailTaken)
    return res.status(500).json({ message: "Email already in use" });
  else {
    try {
      //Hash password

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = await User.create({
        id: Date.now(),
        email: req.body.email,
        password_digest: hashedPassword,
        is_admin: "0",
        created_at: new Date(),
      });

      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
});

router.post("/verifyOTP", async (req, res) => {
  try {
    let { userId, otp } = req.body;
    if (!userId || !otp) throw Error("Empty otp details are not allowed");

    const UserOTPRecords = await OTPverification.findAll({
      where: { userid: userId },
    });

    if (UserOTPRecords.length <= 0)
      throw new Error(
        "Account record doesn't exist or has been verified already!"
      );

    const { expires_at } = UserOTPRecords[0].dataValues;
    const hashedOTP = UserOTPRecords[0].dataValues.otp;
    const expires_at_ms = new Date(expires_at).getTime();
    
    if (expires_at_ms < Date.now()) {
      await OTPverification.destroy({ where: { userid: userId } });
      throw new Error("Code has expired. Please request again.");
    } else {
      const validOTP = await bcrypt.compare(otp, hashedOTP);

      if (!validOTP) throw new Error("Invalid code passed. Check your inbox.");
      //await User.update({verified: true}, {where: {id:userId}})
      await OTPverification.destroy({ where: { userid: userId } });
      res.status(200).json({
        status: "VERIFIED",
        message: "User email verified succesfully",
      });
    }
  } catch (error) {
    res.status(401).json({
      status: "FAILED",
      massage: error.message,
    });
  }
});

module.exports = router;
