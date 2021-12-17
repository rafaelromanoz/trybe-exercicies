const express = require('express');

const usuariosController = express.Router();

usuariosController.get('/', (req, res) => res.status(200).json({msg: 'listando todos usuários'}));

usuariosController.get('/:id', (req, res) => res.status(200).json({msg: 'Listando todos usuários por id'}));

usuariosController.post('/cadastrar', (req, res) => res.status(201).json({msg: 'Usuário registrado com sucesso'}));

module.exports = usuariosController;