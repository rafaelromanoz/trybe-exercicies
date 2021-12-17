const express = require('express');

const vendasController = express.Router();

vendasController.get('/', (_req, res) => res.status(200).json({msg: 'listando todas as vendas'}));

vendasController.get('/:id', (_req, res) => res.status(200).json({msg: 'Listando venda por por id'}));

vendasController.post('/cadastrar', (_req, res) => res.status(201).json({msg: 'Venda cadastrada com sucesso'}));

module.exports = vendasController;