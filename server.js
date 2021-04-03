// express set-up
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const router = require("./routes/bookRoutes")
app.use('/books', router)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})