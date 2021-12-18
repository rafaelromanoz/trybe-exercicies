const connection = require('./connection');
const { ObjectId } = require('mongodb');

const isValid = (firstName, lastName, email, password) => {
  if (!firstName)
    return { error: true, message: 'Favor incluir o primeiro nome' };
  if (!lastName) return { error: true, message: 'Favor incluir o último nome' };
  if (!email) return { error: true, message: 'Favor incluir o email' };
  if (!password) return { error: true, message: 'Favor incluir a senha' };
  if (password.length < 6)
    return { error: true, message: 'Senha tem que ter 6 ou mais caracteres' };
  if (typeof password !== 'string')
    return { error: true, message: 'O tipo do password deve ser string' };
  return true;
};

const create = async (firstName, lastName, email, password) => {
  let id;
  await connection()
    .then((db) =>
      db.collection('users').insertOne({ firstName, lastName, email, password })
    )
    .then((result) => (id = result.insertedId));
  return {
    id,
    firstName,
    lastName,
    email,
  };
};

const findUserById = async (id) => {
  try {
    const allUsers = await connection().then((db) =>
      db.collection('users').findOne(ObjectId(id))
    );
    if (!allUsers) return false;
    return allUsers;
  } catch (err) {
    return { error: false };
  }
};

const getAllUsers = async () => {
  const allUsers = await connection().then((db) =>
    db.collection('users').find({}).toArray()
  );
  if (allUsers.length === 0) return false;
  return allUsers;
};

module.exports = {
  isValid,
  create,
  findUserById,
  getAllUsers,
};
