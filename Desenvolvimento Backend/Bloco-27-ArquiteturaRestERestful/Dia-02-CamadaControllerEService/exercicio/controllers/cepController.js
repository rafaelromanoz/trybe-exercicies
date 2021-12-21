const express = require('express');
const { cepMiddleware, cepPost } = require('./middlewares/cepMiddleware');
const {
  validateCepParams,
  validateCepReq,
  validateExistingCep,
} = require('./middlewares/validates');

const routeCep = express.Router();

routeCep.get('/:cep', validateCepParams, cepMiddleware);
routeCep.post('/', validateCepReq, validateExistingCep, cepPost);

module.exports = routeCep;
