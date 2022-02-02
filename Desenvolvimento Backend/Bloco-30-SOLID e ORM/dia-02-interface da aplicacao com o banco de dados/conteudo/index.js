const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { Product } = require('./models');

app.use(bodyParser.json());

app.get('/products', async (req, res) => {
  try {
    const Product = await Product.findAll();
    res.status(200).json(Product);
  } catch (error) {
    console.error(error.message);
    res.json(500).json({ message: 'algo deu errado' });
  }
});


// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const prod = await Product.findByPk(id);

    if (!prod)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(Product);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo http://localhost:3000/Product/search/1?email=aqui-o-email
app.get('/search/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const prod = await Product.findOne({ where: { id, email } });

    if (!prod)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(Product);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
app.post('/', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newProduct = await Product.create({ fullName, email });

    return res.status(201).json(newProduct);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
app.put('/:id', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;

    const [updateProduct] = await Product.update(
      { fullName, email },
      { where: { id } }
    );

    console.log(updateProduct); // confira o que é retornado quando o Product com o id é ou não encontrado;

    if (!updateProduct)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.destroy({ where: { id } });

    console.log(deleteProduct); // confira o que é retornado quando o Product com o id é ou não encontrado;

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = app;


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
