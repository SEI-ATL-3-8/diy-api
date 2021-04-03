const express = require('express')
const bookRouter = express.Router()
const { create, getAll, find, update, delete: destroy } = require('../controllers/bookController')
bookRouter.post('/', create)
bookRouter.get('/', getAll)
bookRouter.get('/:id', find)
bookRouter.put('/:id', update)
bookRouter.delete('/:id', destroy)
module.exports = bookRouter