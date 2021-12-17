const express = require('express');
const bodyParser = require('body-parser');
const validateUser = require('./validateUserMiddleware');
const midVerify = require('./midVerifyEmailPass');
const app = express();

app.use(bodyParser.json());

app.post('/user/register', validateUser, (req, res, next) => {
  try {
    console.log(req.body);
  } catch (err) {
    next(err);
  }
});

app.post('/user/login', midVerify, (req, res, next) => {
  try {
    res.status(200).json({token: `${req.token}`})
  }catch(err) {
    next(err);
  }
});

app.listen(3001, () => {
  console.log('O pai ta on na porta 3001');
});
