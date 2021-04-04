const bookController = require('../controllers/bookControllers')
const express = require('express')
const router = express.Router()

//All Books
router.get('/', bookController.getAllBooks)
//One Book
router.get('/:id', bookController.getBook)
//Create Book
router.post('/', bookController.createBook)
//Update book
router.put('/:id', bookController.updateBook)
//Delete Book
router.delete('/:id', bookController.deleteBook)

module.exports = router