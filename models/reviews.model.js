const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true, minlength: 3},
  password: {type: String, required: true, unique: true, trim: true, minlength: 3},
  review: { type: String, trim: true, minlength: 5},
  //date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;