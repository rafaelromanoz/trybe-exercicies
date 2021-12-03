const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (req, res) => {
  res.json(drinks);
});

app.get('/drinksOrdenados', (req,res) => {
  const drinksOrdenados = drinks.sort((a,b) => {
    if(a.name < b.name) {
      return -1;
    }
    if(a.name > b.name) {
      return 1;
    }
    return 0;
  });
  res.json(drinksOrdenados);
});

app.get('/drinks/:id', (req, res) => {
  const {id} = req.params;
  const drinkFilter = drinks.find((r) => r.id === parseInt(id));
  if(!drinkFilter) return res.status(404).json([]);
  res.json(drinkFilter);
});

app.post('/drinks', (req, res) => {
  const {id, name, price} = req.body;
  drinks.push({
    id,
    name,
    price
  });
  console.log(id);
  res.status(201).json({message: 'Deu certo '});
});

app.listen(3002, () => {
  console.log("Estou ouvindo na porta 3002")
});

