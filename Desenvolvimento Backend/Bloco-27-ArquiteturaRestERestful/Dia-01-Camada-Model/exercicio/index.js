const express = require('express');
const bodyParser = require('body-parser');
const Book = require('./model/User');
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get('/user', (_req, res) => {});

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!Book.isValid(firstName, lastName, email, password))
    return res
      .status(400)
      .json({
        error: true,
        message: 'Algo deu errado',
      });
      res.status(201).json(await Book.create(firstName,lastName, email, password))
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
