const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const trainersRouter = require('./routes/trainers');
const bookingsRouter = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/trainers', trainersRouter);
app.use('/api/bookings', bookingsRouter);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/gym';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

module.exports = app;
