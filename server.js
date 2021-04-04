const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

const router = require('./routes/bookRoutes')
app.use('/books', router)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

// const models = require('./models')

// const getAllBooks = async (req, res) => {
//     try{
//         let books = await models.book.findAll()
//         res.json({books})
//     }catch (error) {
//         res.json({error})
//     }
// }

// const getBook = async (req, res) => {
//     try{
//         let oneBook = await models.book.findOne({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({oneBook})
//     }catch (error) {
//         res.json({error})
//     }
// }

// const createBook = async (req, res) => {
//     try{
//         let newBook = await models.book.create({
//             title: req.body.title,
//             author: req.body.author,
//             release_date: req.body.release_date,
//             image: req.body.image
//         })
//         res.json({newBook})
//     }catch (error) {
//         res.json({error})
//     }
// }

// const updateBook = async (req, res) => {
//     try{
//         let update = req.body
//         let updatedBook = await models.book.findOne({
//             where: {
//                 id:req.params.id
//             }
//         })
//         let final = await updatedBook.update(update)
//         res.json({final})
//     }catch (error) { console.log(error);
//         res.json({error})
//     }
// }

// const deleteBook = async (req, res) => {
//     try{
//         let destroyedBook = await models.book.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({destroyedBook})
//     }catch (error) {
//         res.json({error})
//     }
// }

// //All Books
// app.get('/books', getAllBooks)
// //One Book
// app.get('/books/:id', getBook)
// //Create Book
// app.post('/books', createBook)
// //Update book
// app.put('/books/:id', updateBook)
// //Delete Book
// app.delete('books/:id', deleteBook)

