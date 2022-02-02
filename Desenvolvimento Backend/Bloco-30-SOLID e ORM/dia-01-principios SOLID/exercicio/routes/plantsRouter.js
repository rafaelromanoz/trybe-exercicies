const express = require('express');

const plantRouter = express.Router();

plantRouter.get('/');
plantRouter.get('/:id');
plantRouter.delete('/:id');
plantRouter.put('/:id');
plantRouter.post('/');

module.exports = plantRouter;
