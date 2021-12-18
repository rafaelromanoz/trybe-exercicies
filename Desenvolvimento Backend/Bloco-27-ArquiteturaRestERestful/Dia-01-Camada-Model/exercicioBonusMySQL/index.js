const express = require('express');
const bodyParser = require('body-parser');
const Users = require('./models/User');
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  if ((await Users.findUserById(id)) === false)
    return res.status(404).json({ message: 'Usuário não encontrado' });
  if (
    (await Users.findUserById(id)) ===
    'o erro é Argument passed in must be a string of 12 bytes or a string of 24 hex characters'
  )
    return res
      .status(404)
      .json({ message: 'Informe um id do tipo hexadecimal' });
  res.status(200).json(await Users.findUserById(id));
});

app.get('/user', async (_req, res) => {
  res.status(200).json(await Users.getAllUsers());
});

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (Users.isValid(firstName, lastName, email, password).error)
    return res.status(400).json({
      error: true,
      message: `${Users.isValid(firstName, lastName, email, password).message}`,
    });
  res.status(201).json(await Users.create(firstName, lastName, email, password));
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  if(await Users.verifyIfExistUser(id) === false) return res.status(400).json({message: 'Usuário não encontrado'})
  if (Users.isValid(firstName, lastName, email, password).error)
    return res
      .status(400)
      .json({
        message: `${
          Users.isValid(firstName, lastName, email, password).message
        }`,
      });
      console.log(`index:${firstName}`);
  await Users.updateUser(id, firstName, lastName, email, password);
  res.status(200).json({ message: 'Usuário alterado com sucesso' });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));