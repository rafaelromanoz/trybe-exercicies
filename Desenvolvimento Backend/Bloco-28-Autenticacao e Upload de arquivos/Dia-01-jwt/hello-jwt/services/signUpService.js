// /* eslint-disable complexity */

// const { findUserModel } = require('../models/loginModel');
// const { createMessage } = require('../utils/functions');
// const { generateToken } = require('./authService');

// /* eslint-disable max-lines-per-function */
// const signUpService = async (username, passwordBody) => {
//   if (!username || !passwordBody) {
//     throw createMessage(401, 'É necessário o usuário e senha para fazer login');
//   }

//   if (!userFound || userFound.password !== passwordBody) {
//     throw createMessage(401, 'Usuário não existe ou senha inválida');
//   }
//   if (username === 'admin' && passwordBody === 's3nh4S3gur4???') {
//     const { password, _id, ...userWithOutPassword } = userFound;
//     const objToken = {
//       ...userWithOutPassword,
//       admin: true,
//     };
//     const token = generateToken(objToken);
//     return token;
//   }
//   const { password, _id, ...userWithOutPassword } = userFound;
//   const objToken = {
//     ...userWithOutPassword,
//     admin: false,
//   };
//   const token = generateToken(objToken);
//   return token;
// };

// module.exports = {
//   signUpService,
// };