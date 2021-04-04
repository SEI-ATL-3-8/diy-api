const express = require('express');
const app = express();
const PORT = process.env.PORT || 2021;
const rowdy = require('rowdy-logger')
const cors = require('cors')
app.use(cors())

const routesReport = rowdy.begin(app)

app.use(express.json())

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})

const wineRoutes = require('./wineRoutes')
app.use('/winelist', wineRoutes)






