const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)
const wineRoutes = require('./routes/wineRoutes')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
})

app.use('/wines', wineRoutes)