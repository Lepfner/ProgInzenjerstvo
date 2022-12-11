const express = require("express");
const router = express.Router();
const { authRole } = require("../middleware/authRole");
const Admin = require("../models/admin");
const Event = require("../models/event");
const Organizer = require("../models/organizer");
const Purchase = require("../models/purchase");
const PurchaseItem = require("../models/purchaseItem");
const Ticket = require("../models/ticket");
const Venue = require("../models/venue");
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
