const connection = require('./connection');

const findUserModel = async (username) => {
  const conn = await connection();
  const user = await conn.collection('users').findOne({ username });
  return user;
};

module.exports = {
  findUserModel,
};