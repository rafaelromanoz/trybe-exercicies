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
    const user = await connection().then((db) =>
      db.collection('users').findOne(ObjectId(id))
    );
    if (!user) return false;
    return user;
  } catch (err) {
    return `o erro é ${err.message}`;
  }
};

const getAllUsers = async () => {
  const allUsers = await connection().then((db) =>
    db.collection('users').find({}).toArray()
  );
  if (allUsers.length === 0) return false;
  return allUsers;
};

const updateUser = async (id, firstName, lastName, email, password) => {
  const novosValores = { $set: { firstName, lastName, email, password } };

  try {
    const user = await connection().then((db) =>
      db.collection('users').findOne(ObjectId(id))
    );
    if (!user) return false;
    await connection().then((db) =>
      db.collection('users').updateOne({ _id: new ObjectId(id) }, novosValores)
    );
  } catch (err) {
    return `o erro é ${err.message}`;
  }
};

module.exports = {
  isValid,
  create,
  findUserById,
  getAllUsers,
  updateUser,
};
