const express = require('express');
const app = express();
const error = require('./controllers/middlewares/error');

require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routePing = require('./controllers/pingController');
const routeCep = require('./controllers/cepController');

app.use('/ping', routePing);
app.use('/cep', routeCep);

const PORT = process.env.PORT;

app.use(error);

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}!`));
