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

router.get("/search/events", async (req, res) => {
  try {
    const events = await Event.findAll({
      where: { event_name: { [Op.like]: `${req.query.event_name}%` } },
    });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
