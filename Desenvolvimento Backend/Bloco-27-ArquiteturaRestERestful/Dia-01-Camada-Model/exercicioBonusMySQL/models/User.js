const connection = require('./connection');

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

const verifyIfExistUser = async (id) => {
  const [user] = await connection.execute('SELECT * FROM users_crud.users WHERE id = ?', [id]);
  if(user.length === 0){
    return false
  }
  return true;
}

const create = async (firstName, lastName, email, password) => {
  const [allUsers] = await connection.execute('SELECT * FROM users_crud.users');
  const id = allUsers.length + 1;
  await connection.execute(
    'INSERT INTO users_crud.users(id, first_name,last_name,email, password) VALUES(?,?,?,?, ?)',
    [id, firstName, lastName, email, password]
  );
  return {
    id,
    firstName,
    lastName,
    email,
  };
};

const findUserById = async (id) => {
  const [user] = await connection.execute('SELECT * FROM users_crud.users WHERE id = ?', [id]);
  if (!verifyIfExistUser(id)) return false;
  return user;
};

const getAllUsers = async () => {
  const [allUsers] = await connection.execute('SELECT * FROM users_crud.users');
  if (allUsers.length === 0) return false;
  return allUsers;
};

const updateUser = async (id, firstName, lastName, email, password) => {
    await connection.execute(
    'UPDATE users_crud.users SET id = ?, first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? ',
    [id, firstName, lastName, email, password, id]);
};

module.exports = {
  isValid,
  create,
  findUserById,
  getAllUsers,
  updateUser, 
  verifyIfExistUser
};


// await connection.execute(
//   'UPDATE users_crud.users SET id = ?, first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? ',
//   [id, firstNamee, lastName, email, password, id]
