
const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  reservedAt: { type: Date, default: Date.now },
  deliveredAt: Date
});

module.exports = mongoose.model('Reservation', ReservationSchema);
