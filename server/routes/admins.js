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

router.get("/events/stats/users/:id", authRole(), async (req, res) => {
  try {
    const organizersList = await await Organizer.findAll({
      attributes: ["id"],
      where: { adminID: req.params.id },
      raw: true,
    });

    const eventsList = await await Event.findAll({
      attributes: ["id"],
    });
    console.log(eventList.eventID);

    res.status(200).json(eventList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/events/stats/tickets/:id", authRole(), async (req, res) => {
  try {
    const eventList = await await Admin.findOne({
      attributes: ["eventID"],
      where: { id: req.params.id },
      raw: true,
    });

    const purchases = await await Purchase.findAll();
    console.log(eventList.eventID);

    res.status(200).json(eventList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/events/:id/edit", async (req, res) => {
  try {
    const event = await Event.update(
      {
        event_name: req.body.event_name,
        event_name_abrv: req.body.event_name_abrv,
        event_url: req.body.event_url,
        early_start: req.body.early_start,
        early_end: req.body.early_end,
        sale_start: req.body.sale_start,
        sale_end: req.body.sale_end,
        doors_open: req.body.doors_open,
        last_entry: req.body.last_entry,
        min_age: req.body.min_age,
        venueID: req.body.venueID,
        ticketID: req.body.ticketID,
        event_type: req.body.event_type,
      },
      { where: { id: req.params.id }, returning: true, plain: true }
    );

    res.status(200).json(event);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/events/:id/create", async (req, res) => {
  try {
    //Define which variable should be checked when creating new Event (WIP)
    const newEvent = await Event.create({
      event_name: req.body.event_name,
      event_name_abrv: req.body.event_name_abrv,
      event_url: req.body.event_url,
      early_start: req.body.early_start,
      early_end: req.body.early_end,
      sale_start: req.body.sale_start,
      sale_end: req.body.sale_end,
      doors_open: req.body.doors_open,
      last_entry: req.body.last_entry,
      min_age: req.body.min_age,
      venueID: req.body.venueID,
      ticketID: req.body.ticketID,
      event_type: req.body.event_type,
    });

    res.status(201).json(newEvent);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
