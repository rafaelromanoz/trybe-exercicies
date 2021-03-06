const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const config = require('./config/config');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development
);

const { Address, Employee, Book, User } = require('./models');
const app = express();

const port = 3000;
app.use(bodyParser.json());
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });
    return res.status(200).json(employees);
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id } });
    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }
    return res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/userbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });
    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });
    return res.status(200).json(user);
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/employees', async (req, res) => {
  // Primeiro iniciamos a transação
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;
    // depois executamos as operações

    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t }
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t }
    );

    //se chegou até essa linha quer dizer que nenhum erro ocorreu.
    // com isso, podemos finalizar a transação usando a função 'commit'.

    await t.commit();
    return res.status(201).json({ message: 'Cadastrado com successo' });
  } catch (error) {
    // se entrou nesse bloco é porque alguma operação falhou
    // nesse caso o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create(
        {
          firstName,
          lastName,
          age,
        },
        { transaction: t }
      );
      await Address.create(
        {
          city,
          street,
          number,
          employeeId: employee.id,
        },
        { transaction: t }
      );
    });
    return res.status(201).json({ message: 'Cadastro com sucesso' });
    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (error) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// app.post('/employees', async (req, res) => {
//   try {
//     const { firstName, lastName, age, city, street, number } = req.body;
//     const employee = await Employee.create({ firstName, lastName, age });
//     await Address.create({ city, street, number, employeeId: employee.id });

//     return res.status(201).json({ message: 'Cadastro realizado com sucesso' });
//   } catch (error) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

module.exports = app;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
