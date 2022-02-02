const { Book } = require('../models');

const getBooksController = async (_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getBooksByIdController = async (req, res) => {
  const { id } = req.params;
  // const book = await Sequelize.
}

module.exports = {
  getBooksController,
};
