// grab models
const models = require('../models');

// controller
let bookController = {};

// get all books
bookController.getAll = async (req, res) =>
{
    try {
        // grab books
        const books = await models.book.findAll();
        // check if books exist
        if (books)
        {
            // display books
            res.json(books);
        }
        // books do not exist
        else
        {
            res.json(`No books found`);
        }
    } catch (error) {
        res.json(error);
    }
}

// get specific book
bookController.getOne = async (req, res) =>
{
    try {
        // grab book
        const book = await models.book.findOne({ where: { id: req.params.id } });
        // check if book exists
        if (book)
        {
            // display book
            res.json(book);
        }
        // book does not exist
        else
        {
            res.json(`No book found with ID: ${req.params.id}`);
        }
    } catch (error) {
        res.json(error);
    }
}

// create book
bookController.create = async (req, res) =>
{
    try {
        // post new book
        const book = await models.book.create(
        {
            title: req.body.title,
            author: req.body.author,
            releaseDate: req.body.releaseDate,
            image: req.body.image
        })
        // display new book
        res.json(book);
    } catch (error) {
        res.json(error);
    }
}

// update book
bookController.update = async (req, res) =>
{
    try {
        // grab book
        const book = await models.book.findOne({ where: { id: req.params.id } });
        // check if book exists
        if (book)
        {
            // update book
            book.update(req.body);
            // display book
            res.json(book);
        }
        // book does not exist
        else
        {
            res.json(`No book found with ID: ${req.params.id}`);
        }
    } catch (error) {
        res.json(error);
    }
}

// delete book
bookController.delete = async (req, res) =>
{
    try {
        // grab book
        const book = await models.book.findOne({ where: { id: req.params.id } });
        // check if book exists
        if (book)
        {
            // delete book
            book.destroy();
            res.json('Book successfully deleted!');
        }
        // book does not exist
        else
        {
            res.json(`No book found with ID: ${req.params.id}`);
        }

    } catch (error) {
        res.json(error);
    }
}

module.exports = bookController;