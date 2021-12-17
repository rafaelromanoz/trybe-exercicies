const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const validateToken = require('./validateToken');
const rescue = require('express-rescue');
const axios = require('axios').default;

app.use(bodyParser.json());

app.get('/btc/price', validateToken, rescue(async (_req,res, next) => {
  const data = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  res.status(200).json(data.data);
}));

app.listen(3001, () => {
  console.log('A porta é 3001');
});