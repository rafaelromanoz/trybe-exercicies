const { createUserModel } = require('../models/userModel');
const userSchema = require('../schemas/userSchema');

const createUserService = async (user) => {
  const { error } = userSchema.validate(user);
  if (error) throw error;
  const { id } = await createUserModel(user);
  return {
    id,
    user: user.username,
  };
};

module.exports = {
  createUserService,
};