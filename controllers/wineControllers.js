const models = require('../models')

const wineControllers = {}

wineControllers.getAll = async (req, res) => {
    try {
        const wines = await models.wine.findAll()
        res.json({wines})
    } catch (error) {
        res.json({error})
    }
}

wineControllers.getOne = async (req, res) => {
    try {
        const wine = await models.wine.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({wine})
    } catch (error) {
        res.json({error})
    }
}

wineControllers.postNew = async (req, res) => {
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

wineControllers.putOld = async (req, res) => {
    try {
        const newDetails = req.body
        const whichWine = await models.wine.findOne({
            where: {
                id: req.params.id
            }
        })
        const updateDone = await whichWine.update(newDetails)
        res.json({updateDone})
    } catch (error) {
        res.json({error})
    }
}

wineControllers.deleteWine = async (req, res) => {
    try {
        const whichWineDeleted = await models.wine.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({whichWineDeleted})
    } catch (error) {
        res.json({error})
    }
}

module.exports = wineControllers