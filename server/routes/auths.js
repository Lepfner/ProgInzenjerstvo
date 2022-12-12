const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const { authRole } = require("../middleware/authRole");
const { firebase, auth } = require("../config/admin.js");
const {
  authMiddleware,
  generateToken,
} = require("../middleware/auth-firebase");

//Log in
router.post("/login", generateToken, async (req, res) => {
  try {
    if (!req.user) return res.status(404).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      req.user.password
    );

    if (!validPassword)
      return res.status(400).json({ message: "Authentication failed" });

    res.status(200).json(req.user);
  } catch (error) {
    res.send(error);
  }
});

router.post("/register", async (req, res) => {
  if (req.body.levelOfAccess == "admin") {
    const emailTaken = await Admin.findOne({
      attributes: ["email"],
      where: { email: req.body.email },
      raw: true,
    });

    if (emailTaken)
      return res.status(500).json({ message: "Email already in use" });
    else {
      try {
        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const admin = await Admin.create({
          id: req.body.id,
          username: req.body.username,
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          dateOfBirth: req.body.dateOfBirth,
          gender: req.body.gender,
          levelOfAccess: "admin",
          country: req.body.country,
          state: req.body.state,
          city: req.body.city,
          walletId: req.body.walletId,
          profileImageURL: req.body.profileImageURL,
          password: hashedPassword,
        });

        res.status(201).json(admin);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  } else if (req.body.levelOfAccess == "user") {
    const usernameTaken = await User.findOne({ username: req.body.username });
    const emailTaken = await User.findOne({ email: req.body.email });

    if (usernameTaken)
      return res.status(500).json({ message: "Username already in use" });
    if (emailTaken)
      return res.status(500).json({ message: "Email already in use" });
    else {
      try {
        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = await User.create({
          username: req.body.username,
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          dateOfBirth: req.body.dateOfBirth,
          gender: req.body.gender,
          levelOfAccess: "user",
          country: req.body.country,
          state: req.body.state,
          city: req.body.city,
          walletId: req.body.walletId,
          profileImageURL: req.body.profileImageURL,
          password: hashedPassword,
        });

        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  }
});

module.exports = router;
