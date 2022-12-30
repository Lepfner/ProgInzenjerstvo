const express = require("express");
const router = express.Router();
const User = require("../../models/user");
//const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const { authRole } = require("../../middleware/authRole");
//const { firebase, auth } = require("../config/admin.js");
const uuid = require("uuidv4");
//Log in
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log(user);
    if (!user) return res.status(404).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      req.user.password
    );

    if (!validPassword)
      return res.status(400).json({ message: "Authentication failed" });

    if (req.body.level_of_access === "admin") {
      //Poslati na dodatan authentication & 6-digit code verify
      res.status(200).json(user);
    } else {
      res.status(200).json(user);
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
        id: req.body.id,
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        status: req.body.status,
        nationality: req.body.nationality,
        religion: req.body.religion,
        location: req.body.location,
        profile_img_url: req.body.profileImageURL,
        level_of_access: req.body.level_of_access,
        created_at: new Date(),
        password: hashedPassword,
      });

      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
});

module.exports = router;
