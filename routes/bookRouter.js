const express = require('express');
const { getAllBooks, getOneBook, createBook, deleteBook, updateBook } = require('../controller/booksController');
const bookRouter = express.Router();



bookRouter.get('/books', getAllBooks);
bookRouter.get('/books/:id', getOneBook);
bookRouter.post('/books', createBook);
bookRouter.delete('/books/:id', deleteBook);
bookRouter.put('/books/:id', updateBook);

module.exports = bookRouter;