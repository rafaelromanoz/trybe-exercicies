const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {
  getAllPersonagemController,
  adicionarPersonagem,
} = require('./controller/personagemController');
const error = require('./controller/middlewares/error');

app.use(bodyParser.json());

app.get('/personagem', getAllPersonagemController);

app.post('/personagem', adicionarPersonagem);

app.use(error);

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}!`);
});
