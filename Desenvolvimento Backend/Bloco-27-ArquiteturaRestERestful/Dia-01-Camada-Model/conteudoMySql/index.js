const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Book = require('./models/Book');

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books/search', async (req, res) => {
  const { author_id } = req.query;
  const bookById = await Book.getByAuthorId(author_id);
  if (bookById.length === 0)
    return res.status(404).json({ message: 'Not Found' });
  res.status(200).json(bookById);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name))
    return res.status(400).json({ message: 'Dados inválidos' });

  await Author.create(first_name, middle_name, last_name);
  res.status(200).json({ message: 'Autor criado com sucesso' });
});

app.get('/books', async (req, res) => {
  const books = await Book.getAllBooks();
  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const {title, author_id} = req.body;
  if(!Book.validBook(title, author_id, Author.getAll)) return res.status(401).json({message: 'Dados inválidos'});
  await Book.createBook(title, author_id);
  res.status(201).json({message: 'Livro cadastrado com sucesso'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
