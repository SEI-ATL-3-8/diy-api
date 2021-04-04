
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




const getAllBooks = async (req, res) => {
    try{
    let books = await models.books.findAll()
    res.json({books})
}catch (error){
    res.json({error})
}
}

const getOneBook = async (req, res) => {
    try{
    let book = await models.books.findOne({
        where:{
            id: req.params.id
        }
    })
    res.json({book})
}catch (error){
    res.json({error})
}
}

const createBook = async (req, res) => {
    try{
        let newBook = await models.books.create({
            title: req.body.title,
            author: req.body.author,
            release_date: req.body.release_date,
            image: req.body.image
        })
        res.json({newBook})
    }catch(error){
        res.json({error})
    }
}

const updateBook = async (req, res) => {
    try{
        let book = await models.books.findOne({
            where: {
                id: req.params.id
            }
        })
        let changedBook = await book.update(req.body)
        res.json({changedBook})
    }catch(error){
        res.json({error})
    }
}

const deleteBook = async (req, res) => {
    try{
        let book = await models.books.findOne({
            where:{
                id: req.params.id
            }
        })
        let deleted = await book.destroy()
        res.json({deleted})

    }catch(error){
        res.json({error})
    }
}
// app.get('/books', (req, res) => {
//     res.send('You have reached the GET /books route!')
// })
app.get('/books', getAllBooks)
app.get('/books/:id', getOneBook)
app.post('/books', createBook)
app.put('/books/:id', updateBook)
app.delete('/books/:id', deleteBook)