const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')

const routesReport = rowdy.begin(app)

app.use(express.json())

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})

const models = require('./models')

const getAllBooks = async (req,res) => {
    try {
    let books = await models.mydiyy.findAll()
    res.json({book})
    } catch (error) {
    res.json({error})
    }
}

const getOneBook = async (req,res) => {
    try {
        let book = await models.mydiyy.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({book})
    } catch (error) {
        res.json({error})
    }
}

const createBook = async (req,res) => {
    try {
        let newBook = await models.mydiyy.create({
            title: req.body.title,
            author: req.body.author,
            release_date: req.body.release_date,
            image: req.body.image,
        })
        res.json({newBook})
    } catch (error) {
        res.json({error})
    }
}

app.get('/', (req,res) => {
    res.send('hello')
})

const updateBook = async (req,res) => {
    try {
        let updates = req.body
        let bookToUpdate = await models.mydiyy.findOne({
            where:{
                id: req.params.id
            }
        })
        let final = await bookToUpdate.update(updates)
        res.json({final})

    } catch (error) {
        res.json({error})
    }
}

const deleteBook = async(req,res) => {
    try {
        let bookDelete = await models.mydiyy.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({bookDelete})
    } catch (error) {
        res.json({error})
    }
}

app.get('/books', getAllBooks)
app.get('/books/:id', getOneBook)
app.post('/books',createBook)
app.put('/books/:id',updateBook)
app.delete('/books/:id', deleteBook)
