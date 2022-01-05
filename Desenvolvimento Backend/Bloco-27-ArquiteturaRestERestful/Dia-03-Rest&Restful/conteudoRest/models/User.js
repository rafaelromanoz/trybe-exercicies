const users = require('../data/generated.json');

const getAll = () => {
  return users;
}

module.exports = {
  getAll
}