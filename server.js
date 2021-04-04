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
// const bookRoutes = require('.routes/bookRoutes.js')

const getAllBooks = async (req,res) => {
    try {
    let books = await models.book.findAll()

    res.json({books})
} catch (error) {
    res.json({books})
    }
}

const getOneBook = async (req, res) => {
    try {
        let book = await models.book.findOne({
            where: {
                id: req.params.id
            }
        })
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
        image: req.body.image
    })
        res.json({newBook})
    } catch (error) {
        res.json({error})
    }
}

const updateBook = async(req, res) => {
    let updates = req.body
    let bookToUpdate = await models.book.findOne({
        where: {
            id: req.params.id
        }
    })
    let final = await bookToUpdate.update(updates)
    res.json({final})
}

const deleteBook = async (req, res) => {
    let delBook = await models.book.destroy ({
        where: {
            id: req.params.id
        }
    })
    res.json({delBook})
}

app.get('/books', getAllBooks)
app.get('/books', getOneBook)
app.post('/books', createBook)
app.put('/books/:id', updateBook)
app.delete('/books/:id', deleteBook)

// app.use('/books', bookRoutes)