const moviesController = require('../controllers/moviesController')

const express = require('express')



const moviesRoutes = express.Router()


moviesRoutes.get('/', moviesController.getAll)
moviesRoutes.get('/:id', moviesController.getOne)
moviesRoutes.post('/', moviesController.create)
moviesRoutes.put('/:id', moviesController.update)
moviesRoutes.delete('/:id', moviesController.delete)

module.exports = moviesRoutes