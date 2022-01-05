const userModel = require('../models/User');

const listAll = (req, res) => {
  try {
    const data = userModel.getAll();
    res.status(200).json(data);
  } catch(err) {
    res.status(500).json({ message: 'Algo deu ruim... '})
  }
}

module.exports = {
  listAll
}