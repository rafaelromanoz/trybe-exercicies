const regexUsername = /^.{3,}$/gi;
const regexEmail = /(\w+)@(\w+)\.\w{3}/gi;
const regexPassword = /^\d{4,8}$/gi;

const validateUser = (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !(
      regexUsername.test(username) ||
      regexEmail.test(email) ||
      regexPassword.test(password)
    )
  ) {
    return res.status(400).json({ message: 'Invalid data' });
  }
  res.status(201).json({ message: 'User created' });
  next();
};

module.exports = validateUser;
