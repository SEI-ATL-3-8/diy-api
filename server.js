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

const wineRoutes = require('./routes/wineRoutes')

app.use('/wines', wineRoutes)



// callback






