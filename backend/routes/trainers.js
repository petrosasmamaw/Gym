const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');
const seed = require('../data/seedTrainers');

// GET /api/trainers - list trainers (auto-seed if empty)
router.get('/', async (req, res) => {
  try {
    const count = await Trainer.countDocuments();
    if (count === 0) {
      await Trainer.insertMany(seed);
    }
    const trainers = await Trainer.find().sort({ name: 1 });
    res.json(trainers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/trainers/seed - force reseed trainers (dev only)
router.post('/seed', async (req, res) => {
  try {
    await Trainer.deleteMany({});
    const created = await Trainer.insertMany(seed);
    res.json({ createdCount: created.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
