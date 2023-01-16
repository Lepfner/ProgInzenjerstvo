const bcrypt = require("bcrypt");
const OTPverification = require("../models/OTPverification");
const uuid = require("uuid").v4;
const transporter = require("./transporter");
const sendOTPVerificatonEmail = async ({ id, email, is_admin }, res) => {
  try {
    const otp = `${Math.floor(10000 + Math.random() * 90000)}`;

    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Verify your Email",
      html: `<p>Enter <b>${otp}</b> in the app to verify your email address
      </p> <p><b>This code expires in 1 hour</b>.</p>`,
    };

    const saltRounds = 10;
    const hashedOTP = await bcrypt.hash(otp, saltRounds);
    await OTPverification.create({
      id: uuid(),
      userid: id,
      otp: hashedOTP,
      created_at: Date.now() + 3600000,
      expires_at: Date.now() + 7200000,
    });

    await transporter.sendMail(mailOptions);
    res.status(200).json({
      status: "PENDING",
      message: "Verification otp email sent",
      id: id,
      email,
      is_admin,
    });
  } catch (error) {
    res.status(400).json({
      status: "FAILED",
      message: error.message,
    });
  }
};

module.exports = sendOTPVerificatonEmail;
