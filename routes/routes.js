const wineController = require('../controllers/wineController')
const express = require('express')
const wineRoutes = express.Router()

wineRoutes.get('/', wineController.getAll)
wineRoutes.get('/:id', wineController.find)
wineRoutes.post('/', wineController.create)
wineRoutes.put('/', wineController.update)
wineRoutes.delete('/', wineController.delete)

module.exports = wineRoutes