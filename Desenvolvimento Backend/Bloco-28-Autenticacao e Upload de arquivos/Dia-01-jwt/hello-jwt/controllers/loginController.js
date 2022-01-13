const { findUserService } = require('../services/loginService');

const loginController = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await findUserService(username, password);
    return res.status(200).json({ token: result });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = {
  loginController,
};