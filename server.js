//CREATING EXPRESS SERVER
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')

const routesReport = rowdy.begin(app)

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
    })
    

// CRUD routes
const models = require('./models');

const wine = require('./models/wine');

const getAllWines = async (req ,res) => {
    try {
        let wines = await models.wine.findAll()
        res.json({wines})
    } catch (error) {
        res.json({error})
    }
}

const getOneWine = async (req, res) => {
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

const createWine = async (req, res) => {
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

const updateWine = async (req, res) =>{
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

const deleteWine = async (req, res) => {
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

// callback
app.get('/wines', getAllWines)
app.get('/wines/:id', getOneWine)
app.post('/wines', createWine)
app.put('/wines/:id', updateWine)
app.delete('/wines/:id', deleteWine)





