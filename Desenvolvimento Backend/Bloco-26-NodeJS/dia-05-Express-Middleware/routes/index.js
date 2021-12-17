const express = require('express')
const app = express()
const port = 3000

const produtoController = require('./controllers/produtosController');
const vendasController = require('./controllers/vendasController');
const usuariosController = require('./controllers/usuariosController');

app.use('/produtos', produtoController);
app.use('/vendas', vendasController);
app.use('/usuarios', usuariosController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));