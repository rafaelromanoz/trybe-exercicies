const express = require('express');
const bodyParser = require('body-parser');
const Book = require('./model/User');
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  if (await Book.findUserById(id))
    return res.status(404).json({ message: 'Usuário não encontrado' });
  res.status(200).json(await Book.findUserById(id));
});

app.get('/user', async (_req, res) => {
  res.status(200).json(await Book.getAllUsers());
});

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (Book.isValid(firstName, lastName, email, password).error)
    return res.status(400).json({
      error: true,
      message: `${Book.isValid(firstName, lastName, email, password).message}`,
    });
  res.status(201).json(await Book.create(firstName, lastName, email, password));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
