const express = require("express");
const router = express.Router();
const { authRole } = require("../middleware/authRole");
const Admin = require("../models/admin");

router.get("/", async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
