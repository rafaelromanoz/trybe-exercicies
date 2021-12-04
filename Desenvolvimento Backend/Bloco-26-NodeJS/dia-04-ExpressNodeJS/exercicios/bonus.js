const express = require('express');
const authMiddleware = require('./authMiddleware');
const bodyParser = require('body-parser');
const PORT = 3002;
const app = express();
const crypto = require('crypto');

app.use(bodyParser.json());
// app.use(authMiddleware);

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! ${err.message}`)
});

app.listen(PORT, () => {
  console.log(`Ta on na porta ${PORT}`);
});

app.post('/signup', (req, res) => {
  const {email, password, firstName, phone} = req.body;
  console.log(email)
  if(!email || !password || !firstName || !phone) return res.status(401).json({message: 'missing fields'});
  const generateCripto = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({token: `${generateCripto}`})
});