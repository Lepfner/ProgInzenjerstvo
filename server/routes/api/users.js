const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.put("/profile/:id/edit", async (req, res) => {
  try {
    const user = await User.update(
      {
        profileImageURL: req.body.profileImageURL,
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        country: req.body.country,
        email: req.body.email,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        nationality: req.body.nationality,
        status: req.body.status,
        religion: req.body.religion,
      },
      { where: { id: req.params.id }, returning: true, plain: true }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;