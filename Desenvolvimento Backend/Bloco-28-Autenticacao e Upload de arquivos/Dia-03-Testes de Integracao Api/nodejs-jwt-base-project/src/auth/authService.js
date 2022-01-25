const jwt = require('jsonwebtoken');

const JWT_CONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256'
};

const API_SECRET = 'sdfsdafsdaakcfkasp ghpkfgdsfçg';

const generateToken = (data) => {
  return jwt.sign({...data}, API_SECRET, JWT_CONFIG)
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    return decoded;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken
}