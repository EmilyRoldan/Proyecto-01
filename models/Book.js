
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  editorial: String,
  publicationDate: Date,
  available: { type: Boolean, default: true },
  enabled: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
