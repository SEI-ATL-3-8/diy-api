// express set-up
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello from index route')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})