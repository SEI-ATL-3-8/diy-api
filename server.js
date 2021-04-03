const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const {book} = require('./models')


const allBooks = async (req,res) => {
    try {
    const request = await book.findAll()
    res.json({request})

    } catch (error) {
    res.json({error})
    }
}

const oneBook = async (req,res) => {
    try {
    const request = await book.findOne({
        where: {
              id: req.params.id}
    })
    res.json({request})

    } catch (error) {
    res.json({error})
    }
}

const createBook = async (req,res) => {
    try {
    const request = await book.create({
            title: req.body.title,
            author: req.body.author,
            release_date: req.body.release_date,
            image: req.body.image
    })
    res.json({request})

    } catch (error) {
    res.json({error})
    }
}


const updateBook = async (req,res) => {
    try {
    const request = await book.findOne({
        where: {
            id: req.params.id}})
    const updated = await request.update(req.body)
    res.json({updated})

    } catch (error) {
    res.json({error})
    }
}


const deleteBook = async (req,res) => {
        try {
            const request = await book.findOne({
                where: {
                    id: req.params.id}
            })
            const deleted = await request.destroy()
            res.json({deleted})
        } catch (error) {
            res.json({error})
            }
}



app.get('/books', allBooks)
app.get('/books/:id', oneBook)
app.post('/books', createBook)
app.put('/books/:id', updateBook)
app.delete('/books/:id', deleteBook)

app.listen(port, () => {
    console.log('Listening on port');
})
