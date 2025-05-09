
const express = require('express');
const router = express.Router();
const controller = require('../controllers/reservation.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, controller.reserveBook);
router.get('/user', auth, controller.userReservations);
router.get('/book/:bookId', auth, controller.bookReservations);

module.exports = router;
