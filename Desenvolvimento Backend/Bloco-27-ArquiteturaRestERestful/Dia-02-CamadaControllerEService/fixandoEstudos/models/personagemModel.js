const conn = require('./connection');
const {ObjectId} = require('mongodb');

const getAll = async () => {
  const connection = await conn();
  const result = await connection.collection('personagem').find().toArray();
  return result;
};

const create = async ({name, age}) => {
  const connection = await conn();
  const {insertedId} = await connection.collection('personagem').insertOne({name, age});
  return {
    id: insertedId,
    name,
    age
  };
};

const getPersonagemById = async (id) => {
  const connection = await conn();
  const result = await connection.collection('personagem').find(new ObjectId(id));
  return result;
}

module.exports = {
  getAll,
  create,
  getPersonagemById
}