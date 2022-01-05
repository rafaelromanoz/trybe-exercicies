const express = require('express');
const { listAll } = require('./controllers/ProductController');
const userList = require('./controllers/UserController');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/products', listAll);
app.get('/user', userList.listAll);
app.listen(port, () => console.log(`Rodando na porta ${port}!`));
