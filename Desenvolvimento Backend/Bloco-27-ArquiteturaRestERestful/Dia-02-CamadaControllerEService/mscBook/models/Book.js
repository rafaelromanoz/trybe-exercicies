// models/Book.js

const { ObjectId } = require('mongodb');
const connection = require('./connection');

const renameId = ({ _id, ...document }) => ({ id: _id, ...document });

const getAll = () => connection()
    .then((db) => db.collection('books').find({}).toArray())
    .then((results) => results.map(renameId));

const getByAuthorId = (authorId) => connection()
    .then((db) => db.collection('books').find({ authorId }).toArray())
    .then((result) => (result ? renameId(result) : result));

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!book) return null;

  return book;
};

const create = (title, authorId) => connection()
    .then((db) => db.collection('books').insertOne({ title, authorId }))
    .then((result) => ({ id: result.insertedId, title, authorId }));

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
};