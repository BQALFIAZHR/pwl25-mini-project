const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const validate = require('../middleware/validate');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', validate, bookController.createBook);
router.put('/:id', validate, bookController.updateBook);
router.delete('/:id',bookController.deleteBook);

module.exports = router;
