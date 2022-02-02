const express = require('express');
const { getBooksController } = require('../controllers/booksController');

const booksRouter = express.Router();

booksRouter.get('/', getBooksController);

module.exports = booksRouter;