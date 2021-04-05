const models = require('../models')

const bookController = {}

bookController.getAll = async (req,res) =>{
    try {

        let books = await models.book.findAll()
    
        res.json({books})
        
        } catch (error) {
        res.json({error})
        }
}

bookController.find = async (req,res) => {
    try {

        let books = await models.book.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({books})
        
    } catch (error) {
        res.json({error})
    }
}

bookController.create = async (req,res) => {
    try {

        let newBook = await models.book.create({
            title: req.body.title,
            author: req.body.author,
            release: req.body.release_date
        })
        res.json({newBook})
        
    } catch (error) {
        res.json({error})
    }
}



bookController.update = async (req,res) => {
    try {
        let updates = req.body

        let bookToUpdate = await models.book.findOne({
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

bookController.delete = async(req,res) => {
    try {
        let removeBook = await models.book.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({removeBook})
        
    } catch (error) {
        res.json({error})
    }
}

module.exports = bookController;
