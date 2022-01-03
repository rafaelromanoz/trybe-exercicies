const { celebrate, Segments, Joi, errors } = require('celebrate');
const bodyParser = require('body-parser');
const { create, getUserById, updateUserById } = require('./models/User');
const validateBody = require('./middlewares/validateBody');
const validateParams = require('./middlewares/validateParams');
const ifExists = require('./middlewares/ifExists');
const express = require('express');
const midError = require('./middlewares/error');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.post(
  '/user',
  celebrate({ [Segments.BODY]: validateBody }),
  async (req, res) => {
    const newObj = await create(req.body);
    return res.status(201).json(newObj);
  }
);

app.get(
  '/user/:id',
  celebrate({
    [Segments.PARAMS]: validateParams,
  }),
  ifExists,
  async (req, res) => {
    const { id } = req.params;
    const result = await getUserById(id);
    return res.status(200).json(result);
  }
);

app.put('/user/:id', celebrate({ [Segments.PARAMS]: validateParams }), celebrate({ [Segments.BODY]: validateBody }), ifExists,
  async (req, res) => {
    const { id } = req.params;
    await updateUserById(id, req.body);
    return res.status(201).json({ message: 'Atualizado com sucesso' });
  });

app.use(midError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
