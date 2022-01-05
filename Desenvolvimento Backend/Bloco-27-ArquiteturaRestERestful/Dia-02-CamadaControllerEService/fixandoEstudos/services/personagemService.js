const { getAll, create, getPersonagemById } = require('../models/personagemModel');
const Joi = require('joi');

const getAllPersonagensService = async () => {
  const personagens = await getAll();
  if (personagens.length === 0) {
    throw { error: { statusCode: 404, message: 'Não tem porra nenhuma aqui' } };
  }
  return personagens;
};

const createPersonagem = async (body) => {
  const {error} = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required()
  }).validate(body);

  if(error) {
    throw {error: {statusCode: 400, message: error.message}}
  }
  const personagemExists = await getPersonagemById();

  if(personagemExists){
    throw {error: {statusCode:404, message: 'Personagem já existe'}}
  }
  const newObject = await create(body);
  return newObject;
};

module.exports = {
  getAllPersonagensService,
  createPersonagem
};
