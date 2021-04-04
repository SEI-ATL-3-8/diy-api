const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger')
const models = require('./models')
const routesReport = rowdy.begin(app)
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
})

const getAllBooks = async (req, res) => {
    try {
        let book = await models.book.findAll()
        res.json({book})
    } catch (error) {
        res.json({error})
    }
}
const createBook = async (req, res) => {
    try {
        let newBook = await models.book.create({
            title: req.body.title,
            author: req.body.author,
            release_date: req.body.release_date,
            img_url: req.body.img_url  
        })
        res.json({newBook})
    } catch (error) {
        
    }
}
const oneBook = async (req, res) => {
    try {
        let oneBook = await models.book.findOne({
            where:{
               id: req.params.id 
            }
        })
        res.json(oneBook)
    } catch (error) {
        res.json ({error})
    }
}

const updateBook = async (req, res) => {
    try {
        let updates = req.body
        let book = await models.book.findOne({
            where:{
                id: req.params.id
            }
        })
        let updated = await book.update(updates)
        res.json({updated})
    } catch (error) {
        res.json ({error})
    }
}

const deleteBook = async (req, res) => {
    try {
        let deadBook = await models.book.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({deadBook})
    } catch (error) {
        res.json ({error})
    }
}

app.get('/books', getAllBooks)
app.post('/books', createBook)
app.get('/books/:id', oneBook)
app.put('/books/:id', updateBook)
app.delete('/books/:id', deleteBook)
