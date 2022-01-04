const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Cep = require('./controller/cepController');
require('dotenv').config();

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({message: 'Pong!'})
});

app.get('/cep/:cep', Cep.findAddresByCep);

app.post('/cep', Cep.create);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
