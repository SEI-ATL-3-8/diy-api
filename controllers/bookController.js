const { book } = require('../models')

const bookController = {}

bookController.getAll = async (req, res) => {
    try {
        const data = await book.findAll()
        res.json({data})
        // displayBooks(data)
    } catch (error) {
        res.json({error})
    }
}

bookController.getOne = async (req, res) => {
    try {
        const data = await book.findOne({where: {id: req.params.id}})
        res.json({data})
    } catch (error) {
        res.json({error})
    }
}

bookController.create = async (req, res) => {
    try {
        const data = await book.findOrCreate({
            where: {title: req.body.title},
            defaults: {
                author: req.body.author,
                release_date: req.body.release_date,
                image: req.body.image
            }
        })
        res.json({data})
    } catch (error) {
        res.json({error})
    }
}

bookController.update = async (req, res) => {
    try {
        const data = await book.findOne({where: {id: req.params.id}})
        const updated = await data.update(req.body)
        res.json({updated})
    } catch (error) {
        res.json({error})
    }
}

bookController.destroy = async (req, res) => {
    try {
        const data = await book.findOne({where: {id: req.params.id}})
        const deleted = await data.destroy()
        res.json({deleted})
    } catch (error) {
        res.json({error})
    }
}

module.exports = bookController