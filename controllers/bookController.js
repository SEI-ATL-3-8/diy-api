const models = require('../models');

const bookController = {}

bookController.getAll = async (req,res) => {
    try {
    let books = await models.book.findAll()

    res.json({books})
} catch (error) {
    res.json({error})
    }
}

bookController.find = async (req, res) => {
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

bookController.create = async (req, res) => {
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

bookController.update = async(req, res) => {
    try {
    let updates = req.body
    let bookToUpdate = await models.book.findOne({
        where: {
            id: req.params.id
        }
    })
    let final = await bookToUpdate.update(updates)
    res.json({final})
} catch (error) {
    res.json({error})
}
}

bookController.delete = async (req, res) => {
    try {
    let delBook = await models.book.destroy ({
        where: {
            id: req.params.id
        }
    })
    res.json({delBook})
} catch (error) {
    res.json({error})
}
}

module.exports = bookController;