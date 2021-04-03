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

const bookRoutes = require('./routes/bookRoutes');

app.use('/books', bookRoutes)

// const getAllBooks = async (req,res) => {
//     try {
//         let books = await models.book.findAll()
//         res.json({books})
//     } catch (error) {
//         res.json({error})
//     }
// }
// const findBook = async (req,res) => {
//     try {
//         let book = await models.book.findOne({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({book})
//     } catch (error){
//         res.json({error})
//     }
// }

// const createBook = async (req,res) => {
//     try {
//         let newBook = await models.book.create({
//             title: req.body.title,
//             author: req.body.author,
//             release_date: req.body.release_date,
//             image: req.body.image
    
//         })
//         res.json({newBook})
//     } catch (error) {
//         res.json({error})
//     }
// }

// const updateBook = async (req,res) => {
//     try {
//         let bookToUpdate = await models.book.findOne({
//             where: {
//                 id: req.params.id
//             }
//         })
//         let final = await bookToUpdate.update(req.body)
//         res.json({final})
//     } catch (error) {
//         res.json({error})
//     }
// }

// const deleteBook = async (req,res) => {
//     try {
//         let byeByeBook = await models.book.findOne({
//             where: {
//                 id: req.params.id
//             }
//         })
//         await byeByeBook.destroy()
//         res.json('byeeeeeeee')
//     } catch (error) {
//         res.json({error})
//     }
// }


// app.get('/books', getAllBooks);
// app.get('/books/:id', findBook);
// app.post('/books', createBook);
// app.put('/books/:id', updateBook);
// app.delete('/books/:id', deleteBook);

