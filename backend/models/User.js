const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
}, { timestamps: true });

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
