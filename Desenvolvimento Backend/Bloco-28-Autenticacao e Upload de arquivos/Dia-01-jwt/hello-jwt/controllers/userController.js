const { createUserService } = require('../services/userService');

const createUserController = async (req, res, next) => {
  try {
    const result = await createUserService(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = {
  createUserController,
};