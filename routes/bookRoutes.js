// grab controller
const bookController = require('../controllers/bookController');

// express
const express = require('express');
const bookRoutes = express.Router();

// routes
bookRoutes.get('/', bookController.getAll);
bookRoutes.get('/:id', bookController.getOne);
bookRoutes.post('/', bookController.create);
bookRoutes.put('/:id', bookController.update);
bookRoutes.delete('/:id', bookController.delete);

module.exports = bookRoutes;