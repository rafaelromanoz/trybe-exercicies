// index.js

const express = require('express');
const bodyParser = require('body-parser');

const Book = require('./controllers/Book');
const errorMiddleware = require('./controllers/middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/books', Book.getAll);
app.get('/books/:id', Book.findById);
app.post('/books', Book.create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});