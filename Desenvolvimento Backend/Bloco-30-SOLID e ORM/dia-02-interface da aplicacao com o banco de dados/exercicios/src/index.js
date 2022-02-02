const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/booksRouter');
const PORT = process.env.PORT || 3000;

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/books', booksRouter);



app.listen(PORT, () => console.log(`O pai ta on na porta: ${PORT}!`))