const express = require('express');

const produtoRouter = express.Router();

produtoRouter.get('/', (_req, res) => res.status(200).json({msg: 'listando todos produtos'}));
produtoRouter.get('/:id', (_req, res) => res.status(200).json({msg: 'Listando produtos por id'}));
produtoRouter.post('/cadastrar', (_req, res) => res.status(201).json({msg: 'Produto cadastrado com sucesso'}));

module.exports = produtoRouter;