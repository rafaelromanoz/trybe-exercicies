const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAllPlayersModel = async () => {
  const conn = await connection();
  const allPlayers = await conn.collection('players').find({}).toArray();
  return allPlayers;
};

const getPlayerById = async (name) => {
  const conn = await connection();
  const player = await conn.collection('players').findOne({ name });
  return player;
};

const createPlayerModel = async ({ name, team, age, goals }) => {
  const conn = await connection();
  const id = conn.collection('players').insertOne({ name, team, age, goals });
  return id;
};

const verifyExistsPlayer = async ({ name }) => {
  const conn = await connection();
  const exists = conn.collection('players').findOne({ name });
  return exists;
};

const incrementGoals = async ({ name, increment }) => {
  const conn = await connection();
  const result = conn.collection('players').updateOne(
    { name },
    {
      $inc: {
        goals: increment,
      },
    }
  );
  return result;
};

module.exports = {
  getAllPlayersModel,
  getPlayerById,
  createPlayerModel,
  verifyExistsPlayer,
  incrementGoals,
};
