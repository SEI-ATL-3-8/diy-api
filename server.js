const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')
const cors = require('cors')
const routesReport = rowdy.begin(app)
const bookRoute = require('./routes/bookRoute')
app.use(express.json())
app.use(cors())
app.use('/books', bookRoute)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
})