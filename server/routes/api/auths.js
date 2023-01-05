const express = require("express");
const router = express.Router();
const User = require("../../models/user");
//const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const { authRole } = require("../../middleware/authRole");
//const { firebase, auth } = require("../config/admin.js");

//Log in
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log(user);
    if (user === null)
      return res.status(401).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.dataValues.password_digest
    );

    if (!validPassword)
      return res.status(401).json({ message: "Authentication failed" });

    if (user.dataValues.is_admin) {
      //Poslati na dodatan authentication & 6-digit code verify
      res
        .status(200)
        .json(user);
    } else {
      res
        .status(200)
        .json(user);
    }
  } catch (error) {
    res.send(error);
  }
});

router.post("/register", async (req, res) => {
  const usernameTaken = await User.findOne({
    where: { username: req.body.username },
  });
  const emailTaken = await User.findOne({ where: { email: req.body.email } });

  if (usernameTaken)
    return res.status(500).json({ message: "Username already in use" });
  if (emailTaken)
    return res.status(500).json({ message: "Email already in use" });
  else {
    try {
      console.log("User creating");
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

module.exports = router;
