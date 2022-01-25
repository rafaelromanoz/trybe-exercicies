const connect = require('./connection');
const { ObjectId } = require('mongodb');

const registerUser = async (username, password) =>
  connect()
    .then((db) => db.collection('users').insertOne({ username, password }))
    .then((result) => result.ops[0].username);

const findUser = async (username) =>
  connect().then((db) => db.collection('users').findOne({ username }));

const findUserByIdModel = async (id) => {
  const conn = await connect();
  const response = await conn
    .collection('users')
    .findOne({ _id: ObjectId(id) });
  return response;
};

module.exports = { registerUser, findUser, findUserByIdModel };
