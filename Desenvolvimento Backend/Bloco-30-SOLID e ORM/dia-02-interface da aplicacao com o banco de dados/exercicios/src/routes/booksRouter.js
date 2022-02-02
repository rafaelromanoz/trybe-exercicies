const express = require('express');
const { getBooksController,
  getBooksByIdController,
  postBookController,
  updateBookController,
  deleteBookController,
  searchBookByAuthor,
  orderByAuthorAndDate,
} = require('../controllers/booksController');

const booksRouter = express.Router();

booksRouter.get('/order', orderByAuthorAndDate);
booksRouter.get('/', getBooksController);
booksRouter.get('/:id', getBooksByIdController);
booksRouter.post('/', postBookController);
booksRouter.put('/:id', updateBookController);
booksRouter.delete('/:id', deleteBookController);
booksRouter.get('/search', searchBookByAuthor);

module.exports = booksRouter;