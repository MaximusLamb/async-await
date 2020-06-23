const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
