const connection = require('./connection');

const getAllBooks = async () => {
  const [allBooks] = await connection.execute(
    'SELECT title, author_id FROM books'
  );
  return allBooks;
};

const getByAuthorId = async (id) => {
  const [allBooks] = await connection.execute(
    'SELECT title, author_id FROM books'
  );
  return allBooks.filter(({ author_id }) => author_id == id);
};

const validBook = async (title, author_idd, funcAuthor) => {
  const allBooks = await funcAuthor();
  if (!title || title.length < 3) return false;
  if (!author_idd || allBooks.some((author) => author.id == author_idd))
    return false;
  return true;
};

const createBook = async (title, author_id) => {
  connection.execute('INSERT INTO model_example.books (title, author_id) VALUES(?,?)', [title, author_id])
}

module.exports = {
  getAllBooks,
  getByAuthorId,
  validBook,
  createBook
};
