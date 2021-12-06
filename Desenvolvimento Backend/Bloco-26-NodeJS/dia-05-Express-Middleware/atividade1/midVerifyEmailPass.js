const regexEmail = /(\w+)@(\w+)\.\w{3}/gi;
const regexPassword = /^\d{4,8}$/gi;

const randomToken = require('./randomToken');

const midVerify = (req, res, next) => {
  const token = randomToken(12);
  const { email, password } = req.body;
  if (!(regexEmail.test(email) || regexPassword.test(password))) {
    return res.status(400).json({ message: 'Email or password is incorrect' });
  }
  req.token = token;
  next();
};

module.exports = midVerify;
