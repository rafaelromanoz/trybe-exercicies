const { getAllPersonagensService, createPersonagem } = require('../services/personagemService');

const getAllPersonagemController = async (req, res, next) => {
  try {
    const todosPersonagens = await getAllPersonagensService();
    return res.status(200).json(todosPersonagens);
  } catch (err) {
    next(err);
  }
};

const adicionarPersonagem = async (req, res, next) => {
  try {
    const cadastrarPersonagem = await createPersonagem(req.body);
    return res.status(200).json(cadastrarPersonagem);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPersonagemController,
  adicionarPersonagem,
};
