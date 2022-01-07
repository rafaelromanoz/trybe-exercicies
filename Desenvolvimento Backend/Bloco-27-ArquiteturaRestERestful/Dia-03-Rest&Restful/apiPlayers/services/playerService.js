const {
  getAllPlayersModel,
  getPlayerById,
  createPlayerModel,
  verifyExistsPlayer,
  incrementGoals,
} = require('../models/playerModel');
const { transformToNumber } = require('../utils/transformParam');
const Joi = require('joi');

const getAllPlayersService = async () => {
  const allPlayers = await getAllPlayersModel();
  if (allPlayers.length === 0) {
    throw { error: { statusCode: 404, message: 'Players is empty' } };
  }
  return allPlayers;
};

const schemaBody = Joi.object({
  name: Joi.string().required().messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.min': `"name" should have a minimum length of {#limit}`,
    'any.required': `"name" is a required field`,
  }),
  team: Joi.string().required(),
  age: Joi.number().min(18).required(),
  goals: Joi.number().required(),
});



const createPlayerService = async (id, body) => {
  const {error} = schemaBody.validate(body);
  console.log(error);
  if (error) {
    console.log(error);
    throw { status: error.status, message: error.message };
  }
  const playerExists = await getPlayerById(body.name);

  if (playerExists) {
    throw { error: { statusCode: 406, message: 'Player already exists' } };
  }
  const { insertedId } = await createPlayerModel(body);
  return {
    id: insertedId,
    ...body,
  };
};

const incrementPlayerService = async (queryParam) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    increment: Joi.number().required(),
  }).validate(queryParam);
  if (error) {
    throw { error };
  }
  const existsPlayer = await verifyExistsPlayer(queryParam);
  if (!existsPlayer) {
    throw { error: { statusCode: 404, message: 'Player not found' } };
  }
  const newObject = {
    name: queryParam.name,
    increment: transformToNumber(queryParam.increment),
  };

  await incrementGoals(newObject);
  return newObject;
};

module.exports = {
  getAllPlayersService,
  createPlayerService,
  incrementPlayerService,
};
