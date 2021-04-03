const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger');
const models = require('./models')
const routesReport = rowdy.begin(app)
const wineRoutes = require('./routes/wineRoutes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/wines', wineRoutes)

app.get('/', (req, res) => {
    res.send('Greetings Earthling')
})

app.listen(PORT, () => {
    console.log(`Welcome to the DIY API for Wines. We're live on port ${PORT}`)
    routesReport.print()
})