const {
  getAllPlayersModel,
  getPlayerById,
  createPlayerModel,
  verifyExistsPlayer,
  incrementGoals
} = require('../models/playerModel');
const {transformToNumber} = require('../utils/transformParam');
const Joi = require('joi');

const getAllPlayersService = async () => {
  const allPlayers = await getAllPlayersModel();
  if (allPlayers.length === 0) {
    throw { error: { statusCode: 404, message: 'Players is empty' } };
  }
  return allPlayers;
};

const createPlayerService = async (id, body) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    team: Joi.string().required(),
    age: Joi.number().min(18).required(),
    goals: Joi.number().required(),
  }).validate(body);
  if (error) {
    throw { error };
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
  const {error} = Joi.object({
    name: Joi.string().required(),
    increment: Joi.number().required()
  }).validate(queryParam)
  if(error) {
    throw {error}
  }
  const existsPlayer = await verifyExistsPlayer(queryParam);
  if(!existsPlayer) {
    throw {error: {statusCode: 404, message: 'Player not found'}}
  }
  const newObject = {
    name: queryParam.name,
    increment: transformToNumber(queryParam.increment)
  }

  await incrementGoals(newObject);
  return newObject;
}

module.exports = {
  getAllPlayersService,
  createPlayerService,
  incrementPlayerService
};
