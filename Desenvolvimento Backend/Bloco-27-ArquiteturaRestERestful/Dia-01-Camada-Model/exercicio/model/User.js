const connection = require('./connection');

const isValid = (firstName, lastName, email, password) => {
  if(!firstName) return 'Favor incluir o primeiro nome';
  if(!lastName) return 'Favor incluir o ultimo nome';
  if(!email) return 'Favor incluir o email';
  if(!password) return 'Favor incluir a senha';
  if(password.length < 6) return 'Favor colocar senha maior que 6 caracteres';
  if( typeof password !== 'string') return 'Favor colocar senha no formato correto';
  return true;
};

const create = async (firstName, lastName, email, password) => {
  let id;
  await connection().then((db) => db.collection('users').insertOne({firstName, lastName, email, password})).then((result) =>( id = result.insertedId));
  return {
    id,
    firstName,
    lastName,
    email
  }
};

module.exports = {
  isValid,
  create
};
