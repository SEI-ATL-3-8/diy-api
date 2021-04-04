const bookController = require('../controllers/bookControllers')
const express = require('express')
const bookRoutes = express.Router()

//All Books
bookRoutes.get('/books', bookController.getAllBooks)
//One Book
bookRoutes.get('/books/:id', bookController.getBook)
//Create Book
bookRoutes.post('/books', bookController.createBook)
//Update book
bookRoutes.put('/books/:id', bookController.updateBook)
//Delete Book
app.delete('books/:id', bookController.deleteBook)

module.exports = bookRoutes