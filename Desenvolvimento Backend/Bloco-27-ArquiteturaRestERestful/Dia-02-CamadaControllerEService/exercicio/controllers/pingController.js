const express = require('express');

const pingRouter = express.Router();

pingRouter.get('/', (req, res) => {
  res.status(200).json({message: 'pong!'})
});

module.exports = pingRouter;