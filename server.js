const express = require('express')
const app = express()

const rowdy = require('rowdy-logger')
const routesReporter = rowdy.begin(app)

app.use(express.json())

app.get('/books', (req, res) => {
    res.send('You found the GET /books route!')
})

app.get('/books/:id', (req, res) => {
    console.log(req.params)
    res.send('You are looking for this book: ' + req.params.id)
})

app.post('/books', (req, res) => {
    res.send('You are POSTing to /books')
})

app.put('/books/:id', (req, res) => {
    console.log(req.params)
    res.send('You are editing this specific book: ' + req.params.id)
})

app.delete('/books/:id', (req, res) => {
    console.log(req.params)
    res.send('You are DELETING this specific book: ' + req.params.id)
})

app.listen(3000, () => {
    console.log('server started!')
    routesReporter.print()
})