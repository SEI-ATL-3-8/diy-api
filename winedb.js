const models = require('./models')
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




app.get('/wines', (req, res) => {
    res.send('You have reached the GET /wine!')
  })
// models.wine.create({
//     name: 'coolWine',
//     year: '1999',
//     grapes: 'purple',
//     country: 'korea',
//     region: 'south',
//     description: 'taste like purple',
//     price: 192
// })
