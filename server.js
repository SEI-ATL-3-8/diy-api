const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')

const routesReport = rowdy.begin(app)
app.use(express.json())
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
})

const models = require('./models')

const createWine = async (req,res) => {
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
        res.json(error)
    }
}

const getAllWines = async (req,res) => {
    try {
        let wines = await models.wine.findAll()
        res.json({wines})
    } catch (error) {
        res.json(error)
    }
}

const getOneWine = async (req,res) => {
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

const updateWine = async (req,res) => {
    try {
        let wineToUpdate = await models.wine.findOne({
            where : {
                id: req.params.id
            }
        })
        let final = await wineToUpdate.update(req.body)
        res.json({final})
    } catch (error) {
        res.json({error})
    }
}

const deleteWine = async (req,res) => {
    try {
        let wineToDelete = await models.wine.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({wineToDelete})
    } catch (error) {
        res.json(error)
    }
}

app.post('/wines', createWine)
app.get('/wines', getAllWines)
app.get('/wines/:id', getOneWine)
app.put('/wines/:id', updateWine)
app.delete('/wines/:id', deleteWine)