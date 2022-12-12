const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const User = require("../models/user");
const { Op } = require("sequelize");

router.put("/profile/:id/edit", async (req, res) => {
  try {
    const user = await User.update(
      {
        profileImageURL: req.body.profileImageURL,
        username: req.body.username,
        country: req.body.country,
      },
      { where: { id: req.params.id }, returning: true, plain: true }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});


module.exports = router;
