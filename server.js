 const express = require('express');
 const app = express();
 const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')

const routesReport = rowdy.begin(app)
app.use(express.json())
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    routesReport.print()
})

const wineRoutes = require('./routes/wineRoutes')
app.use('/wines', wineRoutes)
// app.use(express.json())

// app.listen(PORT, () => {
// console.log(`Listening on port ${PORT}`)
// routesReport.print()
// })

//  const models = require('./models')

//  const getAllWines = async (req, res) => {
//      try {
//          let wines = await models.wine.findAll()

//          res.json({wines})
//      } catch (error) {
//          res.json({error})
//      }
//  }

//  const getAWine = async (req, res) => {
//      try {
//          let wines = await models.wine.findOne({
//              where: {
//                  id: req.params.id
//              }
//          })
//          res.json({wine})
//      } catch (error) {
//          res.json({error})
//      }
//  }

//  const updateWine = async (req, res) => {
//      try {
//          let updates = req.body
//          let wineToUpdate = await models.wine.findOne({
//              where: {
//                  id: req.params.id
//              }
//          })
//          let final = await wineToUpdate.update(updates)
//          res.json({final})
//      } catch (error) {
//          res.json({error})
//      }
//  }

//  const createWine = async (req, res) => {
//      try {
//          let newWine = await models.wine.create({
//              name: req.body.name,
//              price: req.body.price,
//              year: req.body.year,
//              grape: req.body.grape,
//              country: req.body.country,
//              region: req.body.region
//          })
//          res.json({newWine})
//      } catch (error) {
//          res.json({error})
//      }
//  }

//  const deleteWine = async(req, res) => {
//      try {
//          let noMoreWine = await models.wine.destroy({
//              where: {
//                  id: req.params.id
//              }
//          })
//          res.json({noMoreWine})
//      } catch (error) {
//          res.json({error})
//      }
//  }

//  app.get('/wines', getAllWines)
//  app.get('/wines/:id', getAWine)
//  app.put('/wines/:id', updateWine)
//  app.post('/wine', createWine)
//  app.delete('/wines/:id', deleteWine)