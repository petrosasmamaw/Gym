// Simple seed runner for backend (node seed.js)
const mongoose = require('mongoose');
require('dotenv').config();
const Trainer = require('./models/Trainer');
const seed = require('./data/seedTrainers');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/gym';

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to Mongo for seeding');
    await Trainer.deleteMany({});
    const docs = await Trainer.insertMany(seed);
    console.log('Seeded trainers:', docs.length);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
