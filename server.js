const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)
const bookRoute = require('./routes/bookRoutes')
app.use(express.json())
const cors = require('cors')
// app.use(express.json)
app.use('/books', cors(), bookRoute)




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
})