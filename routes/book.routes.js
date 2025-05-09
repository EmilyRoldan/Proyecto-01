
const express = require('express');
const router = express.Router();
const controller = require('../controllers/book.controller');
const auth = require('../middleware/auth.middleware');
const permit = require('../middleware/permissions.middleware');

router.post('/', auth, permit('admin'), controller.createBook);
router.get('/', controller.getBooks);
router.get('/:id', controller.getBookById);
router.put('/:id', auth, permit('admin'), controller.updateBook);
router.delete('/:id', auth, permit('admin'), controller.deleteBook);

module.exports = router;
