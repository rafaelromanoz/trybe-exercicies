const express = require('express');

const sunnyRouter = express.Router();

sunnyRouter.get('/:id');

module.exports = sunnyRouter;
