const wineControllers = require('../controllers/wineControllers')
const express = require('express')
const wineRoutes = express.Router()

wineRoutes.get('/', wineControllers.getAll)
wineRoutes.get('/:id', wineControllers.getOne)
wineRoutes.post('/', wineControllers.postNew)
wineRoutes.put('/:id', wineControllers.putOld)
wineRoutes.delete('/:id', wineControllers.deleteWine)

module.exports = wineRoutes