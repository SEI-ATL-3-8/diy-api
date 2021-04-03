const models = require('../models');
const bookController = {}

bookController.create = async (req, res) => {
    try {
        const { release_date: releaseDateParam, ...bodyParams } = req.body;
        const createdBook = await models.book.create(
            {
                releaseDate: releaseDateParam,
                ...bodyParams
            }
        )
        const { releaseDate, ...createdBookData } = createdBook["dataValues"];
        const data = { ...createdBookData, release_date: releaseDate }
        res.json(data)
    } catch (error) {
        res.json(error)
    }
}


bookController.getAll = async (req, res) => {
    try {
        const books = await models.book.findAll()
        const data = books.map(book => {
            const { releaseDate, ...bookData } = book["dataValues"];
            return { ...bookData, release_date: releaseDate }
        })
        res.json(data)
    } catch (error) {
        res.json({ error })
    }
}

bookController.find = async (req, res) => {
    try {
        const book = await models.book.findOne({
            where: {
                id: req.params.id
            }
        })
        const { releaseDate, ...bookData } = book["dataValues"];
        const data = { ...bookData, release_date: releaseDate }
        res.json(data)
    } catch (error) {
        res.json({ error })
    }
}


bookController.update = async (req, res) => {
    const { release_date: releaseDateParam, ...bodyParams } = req.body;
    try {
        const { release_date: releaseDateParam, ...bodyParams } = req.body;
        const bookToUpdate = await models.book.findOne({
            where: {
                id: req.params.id
            }
        })
        const final = await bookToUpdate.update(
            {
                releaseDate: releaseDateParam,
                ...bodyParams
            }
        )
        const { releaseDate, ...bookData } = final["dataValues"];
        const data = { ...bookData, release_date: releaseDate }
        res.json(data)

    } catch (error) {
        res.json({ error })
    }
}

bookController.delete = async (req, res) => {
    try {
        const book = await models.book.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(book)
    } catch (error) {
        res.json({ error })
    }
}


module.exports = bookController