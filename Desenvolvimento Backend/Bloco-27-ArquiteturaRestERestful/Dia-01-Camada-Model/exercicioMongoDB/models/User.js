const connection = require('./connection');
const { ObjectId } = require('mongodb');
const create = async ({ firstName, lastName, email, password }) => {
  const connectMongoDB = await connection();
  const { insertedId } = await connectMongoDB
    .collection('user')
    .insertOne({ firstName, lastName, email, password });
  return {
    id: insertedId,
    lastName,
    email,
    password,
  };
};

const getUserById = async (id) => {
  try {
    const connectMongoDB = await connection();
    const result = await connectMongoDB
      .collection('user')
      .findOne(new ObjectId(id));
    return result;
  } catch (err) {
    console.error(err);
  }
};

const updateUserById = async (id, {firstName, lastName, email, password}) => {
  try {
    const connectMongoDB = await connection();
    const result = await connectMongoDB.collection('user').updateOne({_id: new ObjectId(id)}, {
      $set: {firstName,lastName, email,password}
    });
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = {
  create,
  getUserById,
  updateUserById
};
