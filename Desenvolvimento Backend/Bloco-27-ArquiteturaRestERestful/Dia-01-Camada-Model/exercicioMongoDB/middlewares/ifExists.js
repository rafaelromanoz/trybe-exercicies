const { getUserById } = require('../models/User');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const returnOfUsers = await getUserById(id);
  if (!returnOfUsers) return res.status(404).json({ message: 'Not found' });
  next();
};
