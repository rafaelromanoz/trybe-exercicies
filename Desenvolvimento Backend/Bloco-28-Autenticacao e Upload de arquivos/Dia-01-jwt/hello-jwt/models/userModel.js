const connection = require('./connection');

const createUserModel = async (user) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('users').insertOne({ ...user });
  return {
    id: insertedId,
  };
};

module.exports = {
  createUserModel,
};