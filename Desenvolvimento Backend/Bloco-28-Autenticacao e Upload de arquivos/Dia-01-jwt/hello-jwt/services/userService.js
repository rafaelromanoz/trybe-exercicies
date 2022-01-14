const { findUserModel } = require('../models/loginModel');
const { createUserModel } = require('../models/userModel');
const userSchema = require('../schemas/userSchema');
const { createMessage } = require('../utils/functions');
const { generateToken } = require('./authService');

const createUserService = async (user) => {
  const { error } = userSchema.validate(user);
  const foundUser = await findUserModel(user.username);
  if (foundUser) throw createMessage(409, 'user already exists');
  if (error) throw error;
  const randomNumber = Math.floor(Math.random() * 100);
  const isAdmin = randomNumber > 50;
  console.log('🚀 ~ file: userService.js ~ line 13 ~ createUserService ~ isAdmin', isAdmin);
  const objToCreate = { user, isAdmin };
  const { id } = await createUserModel(objToCreate);
  const token = generateToken(objToCreate);
  return {
    id,
    token,
  };
};

module.exports = {
  createUserService,
};