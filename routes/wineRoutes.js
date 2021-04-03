const wineController = require ('../controllers/wineControllers')
const express = require('express')
const wineRoutes = express.Router()

wineRoutes.get('/', wineController.getAll)
wineRoutes.get('/:id', wineController.getOne)
wineRoutes.post('/create', wineController.addWine)
wineRoutes.put('/update/:id', wineController.updateWine)
wineRoutes.delete('/delete/:id', wineController.deleteWine)

module.exports = wineRoutes