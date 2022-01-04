const rescue = require('express-rescue');
const service = require('../services/service_cep');
const Joi = require('joi');

const findAddresByCep = rescue(async(req, res, next) => {
  const { cep } = req.params;
  const address = await service.findAddressByCep(cep);

  if(address.error) {
    return next(address.error)
  };

  return res.status(200).json(address);
});

const create = rescue(async(req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  if(error) {
    return next(error);
  }
  const newCep = await service.create(req.body);

  if(newCep.error) {
    return next(newCep.error)
  }

  res.status(201).json(newCep);
})

module.exports = {
  findAddresByCep,
  create
}