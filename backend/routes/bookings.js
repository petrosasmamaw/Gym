const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// GET /api/bookings - list bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/bookings - create a booking
router.post('/', async (req, res) => {
  try {
    const { trainerId, userName, date, notes } = req.body;
    if (!trainerId || !userName || !date) {
      return res.status(400).json({ error: 'trainerId, userName and date are required' });
    }
    const booking = new Booking({ trainer: trainerId, userName, date, notes });
    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
