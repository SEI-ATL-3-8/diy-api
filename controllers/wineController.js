const models = require('../models')

const wineController = {}

wineController.getAll = async (req, res) =>{
    try {
        let wines = await models.wine.findAll()

        res.json({wines})
    } catch (error) {
        res.json({error})
    }
}

wineController.find = async (req, res) =>{
    try {
        let wine = await models.wine.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({wine})
    } catch (error) {
        res.json({error})
    }
}

wineController.create = async (req, res) =>{
    try {
        let newWine = await models.wine.create({
            name: req.body.name,
            price: req.body.price,
            year: req.body.year,
            grape: req.body.grape,
            country: req.body.country,
            region: req.body.region
        })
        res.json({newWine})
    } catch (error) {
        res.json({error})
    }
}

wineController.update = async (req, res) =>{
    try {
        let updates = req.body
        let wineToUpdate = await models.wine.findOne({
            where: {
                id: req.params.id
            }
        })
        let final = await wineToUpdate.update(updates)
        res.json({final})
    } catch (error) {
        res.json({error})
    }
}

wineController.delete = async(req, res) =>{
    try {
        let noMoreWine = await models.wine.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({noMoreWine})
    } catch (error) {
        res.json({error})
    }
}

module.exports = wineController;