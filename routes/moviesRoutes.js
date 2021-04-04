const moviesController = require('../controllers/moviesController')

const express = require('express')



const movieRoutes = express.Router()


movieRoutes.get('/', moviesController.getAll)
movieRoutes.get('/:id', moviesController.get)
movieRoutes.post('/', moviesController.create)
movieRoutes.put('/:id', moviesController.update)
movieRoutes.delete('/:id', moviesController.delete)

module.exports = movieRoutes