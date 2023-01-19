const express = require("express");
const router = express.Router();
const { authRole } = require("../../middleware/authRole");
const User = require("../../models/user");

router.get("/admins", async (req, res) => {
  try {
    const admins = findAll({ where: { is_admin: true } });
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res
    .status(200)
    .json({ message: `user ${req.params.id} was successfully deleted!` });
});

module.exports = router;
