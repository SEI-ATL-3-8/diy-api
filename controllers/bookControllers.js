const {book} = require('../models')

const bookController = {}

bookController.getAllBooks = async (req, res) => {
    try{
        let books = await book.findAll()
        res.json({books})
    }catch (error) {
        res.json({error})
    }
}

bookController.getBook = async (req, res) => {
    try{
        let oneBook = await book.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({oneBook})
    }catch (error) {
        res.json({error})
    }
}

bookController.createBook = async (req, res) => {
    try{
        let newBook = await book.create({
            title: req.body.title,
            author: req.body.author,
            release_date: req.body.release_date,
            image: req.body.image
        })
        res.json({newBook})
    }catch (error) {
        res.json({error})
    }
}

bookController.updateBook = async (req, res) => {
    try{
        let update = req.body
        let updatedBook = await book.findOne({
            where: {
                id:req.params.id
            }
        })
        let final = await updatedBook.update(update)
        res.json({final})
    }catch (error) { console.log(error);
        res.json({error})
    }
}

bookController.deleteBook = async (req, res) => {
    try{
        let destroyedBook = await book.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({destroyedBook})
    }catch (error) {
        res.json({error})
    }
}

module.exports = bookController;