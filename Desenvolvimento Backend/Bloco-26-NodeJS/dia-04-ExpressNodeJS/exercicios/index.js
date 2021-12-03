const express = require('express');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const simpsondata = require('./simpsons.json');
const app = express();
const PORT = 3001;


//Crie uma rota GET /ping
//Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({message: 'pong'});
});

//2 Crie uma rota POST /hello
//Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
//Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({message: `Hello, ${name}`});
});

app.post('/greetings', (req, res) => {
  const {name, age} = req.body;
  if(age > 17) return res.status(200).json({message: `Hello, ${name}`})
  else if(age <= 17) return res.status(401).json({message: 'Unauthorized'})
});

//maneira antiga
const lerArquivoSimpson = async () => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf8');
    const toJS = JSON.parse(data);
    return toJS;
  }catch(err) {
    throw new Error('Erro 500')
  };
};


// crie um endpoint get/ simpsons
app.get('/simpsons', (req, res) => {
  res.status(200).json(simpsondata);
});

// crie um endpont simpsons/:id

app.get('/simpsons/:id', (req, res) => {
  const {id} = req.params;
  if(!simpsondata.some((simp) => simp.id === id)) return res.status(404).json({message: 'simpson not found'});
  const simpsonFiltered = simpsondata.find((simp) => simp.id === id);
  res.status(200).json({message: `O simpson foi encontrado moço, aqui ele: ${simpsonFiltered.name}`});
});

//crie um endpoint POST/simpsons
app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;
  if(simpsondata.some((sim) => sim.id === id)) return res.status(409).json({message: 'Id already exists'})
  simpsondata.push({
    id,
    name
  });
  console.log(simpsondata)
  res.status(200).end();
});

//crie uma rota put/users/name/age

app.put('/users/:name/:age', (req, res) => {
  const {name, age} = req.params;
  res.status(200).json({message: `Seu nome é ${name} e você tem ${age} de idade`});
});

// crie uma api de dados das personagens de simpson

app.listen(PORT, () => {
  console.log(`A porta está sendo executada PORT:${PORT}`);
});

