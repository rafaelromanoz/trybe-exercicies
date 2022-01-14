const { signUpService } = require('../services/signUpService');

const signUpController = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await signUpService(username, password);
    return res.status(200).status(result);
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = {
  signUpController,
};