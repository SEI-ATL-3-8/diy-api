const models = require('../models')

const bookController = {}

bookController.getAllBooksgetAllBooks = async (req, res) => {
    try{
        let books = await models.book.findAll()
        res.json({books})
    }catch (error) {
        res.json({error})
    }
}

bookController.getBook = async (req, res) => {
    try{
        let oneBook = await models.book.findOne({
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
        let newBook = await models.book.create({
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
        let updatedBook = await models.book.findOne({
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
        let destroyedBook = await models.book.destroy({
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