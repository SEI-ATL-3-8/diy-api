//const models = require('./models/')
// models.book.create({title: 'Night Angel Trilogy', author: 'Brent Weeks', release_date: 2020})
// models.book.create({title: 'Harry Potter', author: 'J.K Rowling', releasme_date: 2020})
// models.book.create({title: 'Circue Du Freak', author: 'Darren Shan', release_date: 2020})
// models.book.create({title: 'Eragon', author: 'Christopher Paolini', release_date: 2020})
// models.book.create({title: 'Warriors', author: 'Erin Hunter', release_date: 2020})

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

const bookRoutes = require('./routes/bookRoutes')
app.use('/books',bookRoutes)

// const getAllBooks = async (req,res) => {
//     try {

//     let books = await models.book.findAll()

//     res.json({books})
    
//     } catch (error) {
//     res.json({error})
//     }
// }

// const getOneBook = async (req,res) => {
   
//     try {

//         let books = await models.book.findOne({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({book})
        
//     } catch (error) {
//         res.json({error})
//     }
// }

// const createBook = async (req,res) => {
//     try {

//         let newBook = await models.book.create({
//             title: req.body.title,
//             author: req.body.author,
//             release: req.body.release_date
//         })
//         res.json({newBook})
        
//     } catch (error) {
//         res.json({error})
//     }
// }

// const updateBook = async (req,res) => {
//     try {
//         let updates = req.body

//         let bookToUpdate = await models.book.findOne({
//             where:{
//                 id: req.params.id
//             }
//         })
    
//         let final = await bookToUpdate.update(updates)
    
//         res.json({final})
    
        
//     } catch (error) {
//         res.json({error})
//     }
// }

// const deleteBook = async(req,res) => {
//     try {
//         let removeBook = await models.book.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({removeBook})
        
//     } catch (error) {
//         res.json({error})
//     }
// }




// app.get('/', (req,res) => {
//     res.send('hello')
// })

// app.get('/books', getAllBooks)
// app.get('/books/:id', getOneBook)
// app.post('/books', createBook)
// app.put('/books/:id', updateBook)
// app.delete('/books/:id', deleteBook)
