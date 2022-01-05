const products = require('../data/user.json');

const getAll = () => {
  return products;
}

module.exports = {
  getAll
}