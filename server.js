const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger');
const routesReport = rowdy.begin(app)
const wineRoutes = require('./routes/wineRoutes')

// needed for unit 1 group project integration
const cors = require('cors')
app.use(cors())


app.use(express.json())


app.use('/wines', wineRoutes)

app.get('/', (req, res) => {
    res.send('I drink and I know things. -Tyrion Lannister')
})

app.listen(PORT, () => {
    console.log(`Welcome to the DIY API for wines from Westeros and Essos. We're live on port ${PORT}`)
    routesReport.print()
})