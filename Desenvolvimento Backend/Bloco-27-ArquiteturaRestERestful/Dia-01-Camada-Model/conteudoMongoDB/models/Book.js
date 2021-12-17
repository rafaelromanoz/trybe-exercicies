const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAllBooks = async () => {
  const data = await connection().then((db) =>
    db.collection('books').find().toArray()
  );
  return data.map(({ title, author_id }) => ({
    title,
    author_id,
  }));
};

const getBookById = async (id) => {
  return await connection().then((db) => db.collection('books').find({author_id: Number(id)}).toArray())
};

const createBook = async (title, author_id) => {
  await connection().then((db) => db.collection('books').insertOne({title, author_id}))
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook
};
