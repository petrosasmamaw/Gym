const mongoose = require('mongoose');

const TrainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  bio: { type: String },
  img: { type: String },
}, { timestamps: true });

module.exports = mongoose.models.Trainer || mongoose.model('Trainer', TrainerSchema);
