const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger')
const models = require('./models')
const routesReport = rowdy.begin(app)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
})
const bookRoute = require('./routes/bookRoutes')
app.use('/books', bookRoute)




