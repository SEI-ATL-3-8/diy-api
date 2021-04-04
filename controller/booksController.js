const e = require('express');
const {book} = require('../models/');



const getAllBooks = async(req,res) => {
    try {
        const allBooks = await book.findAll();
        res.json(allBooks);
    }
    catch (error) {
        res.json(error);
    }
};

const getOneBook = async (req,res) => {
    try {
        const oneBook = await book.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(oneBook);

        
    }
    catch(error) {
        res.json(error);
    }
}

const createBook = async (req,res) => {
    try {
        const { body } = req;

        body.image = body.image || 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081';

        const createdBook = await book.create(body);
        res.json(createdBook);
    }
    catch(error) {
        res.json(error);
    }
}

const deleteBook = async (req,res) => {
    try {
        
        const findBook = await book.findOne({
            where: {
                id : req.params.id
            }
        });

        if (findBook) {
            const deletedBook = await findBook.destroy();
            res.json(deletedBook);
        }

    }
    catch(error) {
        res.json(error);
    }
}

const updateBook = async (req,res) => {
    try {
        const findBook = await book.findOne({
            where: {
                id : req.params.id
            }
        });

        if (findBook) {
            const updatedBook = await findBook.update(req.body);
            res.json(updatedBook);
        }
    }
    catch(error) {
        res.json(error);
    }
}


module.exports = { getAllBooks, getOneBook, createBook, deleteBook, updateBook };