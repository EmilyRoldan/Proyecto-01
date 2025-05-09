const Reservation = require('../models/Reservation');
const Book = require('../models/Book');

exports.reserveBook = async (req, res) => {
  try {
    const { bookId } = req.body;
    const reservation = new Reservation({ user: req.user.id, book: bookId });
    await reservation.save();
    res.status(201).json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.userReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user.id }).populate('book');
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.bookReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ book: req.params.bookId }).populate('user');
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
