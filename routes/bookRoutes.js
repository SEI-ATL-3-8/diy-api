const bookController = require('../controllers/bookController');
const express = require('express');
const bookRoutes = express.Router();

bookRoutes.get('/', bookController.getAll);
bookRoutes.get('/:id', bookController.find);
bookRoutes.post('/', bookController.create);
bookRoutes.put('/:id', bookController.update);
bookRoutes.delete('/:id', bookController.delete);

module.exports = bookRoutes;