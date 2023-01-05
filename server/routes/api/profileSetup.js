const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.put("/setup", async (req, res) => {
  try {
    
    const user = await User.update(
      {
        profileimg: req.body.profileImg,
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        nationality: req.body.nationality,
        loaction: req.body.loaction,
        status: req.body.status,
        religion: req.body.religion,
        work: req.body.work,
        education: req.body.education,
        height:req.body.height,
        hair_color:req.body.hair_color,
        eye_color:req.body.eye_color,
        about: req.body.about,
      },
      { where: { id: req.query.id }, returning: true, plain: true }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/users", async (req, res) => {
  try {
    console.log("Hello");
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
