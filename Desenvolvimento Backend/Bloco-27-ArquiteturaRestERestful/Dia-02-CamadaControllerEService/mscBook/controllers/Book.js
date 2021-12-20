// controllers/Book.js

const Joi = require('joi');
const rescue = require('express-rescue');
const Book = require('../services/Book');

const getAll = rescue(async (req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const book = await Book.findById(id);

  if (book.error) return next(book.error);

  res.status(200).json(book);
});

const create = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    authorId: Joi.string().not().empty().required(),
  })
    .validate(req.body);

  if (error) return next(error);

  const { title, authorId } = req.body;

  const newBook = await Book.create(title, authorId);

  if (newBook.error) return next(newBook.error);

  res.status(201).json(newBook);
});

module.exports = {
  getAll,
  findById,
  create,
};