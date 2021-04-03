const models = require('../models')

const wineController = {}

wineController.getAll = async (req, res) => {
    const wine = await models.wine.findAll()
    res.json({wine})
}

wineController.getOne = async (req, res) => {
    const wine = await models.wine.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json({wine})
}

wineController.addWine = async (req, res) => {
    const wine = await models.wine.create({
        name: req.body.name,
        year: req.body.year,
        grapes: req.body.grapes,
        country: req.body.country,
        region: req.body.region,
        description: req.body.description,
        picture: req.body.picture,
        price: req.body.price
    })
    res.json('Succesfully created wine!')
}

wineController.updateWine = async (req, res) => {
    const wine = await models.wine.findOne({
        where: {
            id: req.params.id
        }
    })
    wine.update(req.body)
    res.json(`Updated wine at id: ${req.params.id}`)
}

wineController.deleteWine = async (req, res) => {
    const wine = await models.wine.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(`Wine deleted at id: ${req.params.id}`)
}

module.exports = wineController