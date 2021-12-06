const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

app.get('/:fileName', rescue(async(req,res) => {
  console.log(req.params)
  const file = await fs.readFile(`./${req.params.fileName}.txt`);
  res.send(file.toString('utf-8'));
}));

app.use((err, req, res, next) => {
  res.status(500).json({error: `Erro: ${err.message}`})
});

app.listen(3002, () => {
  console.log('dsfds')
});