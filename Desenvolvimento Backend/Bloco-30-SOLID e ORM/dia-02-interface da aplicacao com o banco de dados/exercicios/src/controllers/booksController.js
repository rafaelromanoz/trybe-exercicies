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
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const postBookController = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateBookController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const [ updatedProduct ] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );
    console.log(updatedProduct);
    if (!updatedProduct)
      return res
        .status(404)
        .json({ message: `livro não encontrado com ${id}` });
    return res.status(201).json({ message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteBookController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Book.destroy({ where: { id } });
    console.log(deleteProduct);
    return res.status(204).json();
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const searchBookByAuthor = async (req, res) => {
  try {
    const { author } = req.query;
    const book = await Book.findOne({ where: { author } });
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

const orderByAuthorAndDate = async (req, res) => {
  try {
    const books = await Book.findAll({ order: [['author', 'ASC']], attributes: ['id', 'title', 'author', 'pageQuantity'] });
    return res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};


module.exports = {
  getBooksController,
  getBooksByIdController,
  postBookController,
  updateBookController,
  deleteBookController,
  searchBookByAuthor,
  orderByAuthorAndDate,
};
