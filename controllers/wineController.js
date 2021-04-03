const models = require('../models')

const wineController = {}

wineController.getAll = async (req ,res) => {
    try {
        let wines = await models.wine.findAll()
        res.json({wines})
    } catch (error) {
        res.json({error})
    }
}

wineController.find = async (req, res) => {
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

wineController.create = async (req, res) => {
    try {
        let newWine = await models.wine.create({
            name: req.body.name,
            year: req.body.year,
            grapes: req.body.grapes,
            country: req.body.country,
            region: req.body.region,
            description: req.body.description,
            picture: req.body.picture,
            price: req.body.price
        })
        res.json({newWine})
    } catch (error) {
        res.json({error})
    }
}

wineController.update = async (req, res) =>{
    try {
        let updates = req.body
        let wineUpdate = await models.wine.findOne({
            where:{
                id:req.params.id
            }
        })
        let finalStep = await wineUpdate.update(updates)
        res.json({finalStep})
    } catch (error) {
        res.json({error})
    }
}

wineController.delete = async (req, res) => {
    try {
        let deleteOneWine = await models.wine.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({deleteOneWine})
    } catch (error) {
        res.json({error})
    }
}




module.exports = wineController;