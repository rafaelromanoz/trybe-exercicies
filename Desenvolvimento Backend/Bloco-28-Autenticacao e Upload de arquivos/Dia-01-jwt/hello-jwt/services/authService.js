const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const { API_SECRET } = process.env;

const generateToken = (data) => jwt.sign({ ...data }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, API_SECRET);
    const { username, admin } = decodedToken;
    return { username, admin };
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};