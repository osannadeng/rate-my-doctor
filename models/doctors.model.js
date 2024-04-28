const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorsSchema = new Schema({
  procedure: { type: String, required: true, trim: true},
}, {
  timestamps: true,
});

const Doctors = mongoose.model('Doctors', doctorsSchema);

module.exports = Doctors;