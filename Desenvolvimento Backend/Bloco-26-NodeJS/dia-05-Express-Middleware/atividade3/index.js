const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const verifyId = require('./verifyIdMid');
const err = require('./handleError');
const PORT = 3050;


const posts = [
  {id: 1, nome: 'Rafael', text: 'the weekend'},
  {id: 2, nome: 'King', text: 'moonlight'},
  {id: 3, nome: 'Leons', text: 'never last'}
];

app.use(bodyParser.json());

app.get('/posts/:id', verifyId, (req, res, next) => {
  const { id } = req.params;
  if(!posts.some((posts) => posts.id === parseInt(id))){
    return next({statusCode: 404, message: 'post not found'})
  }
  const post = posts.find((post) => post.id === parseInt(id));
  return res.status(200).json({message: `O post procurado é ${post.nome} e o texto é ${post.text}`});
});

app.get('/posts', (_req, res) => {
  res.status(200).json(posts);
});

app.use(err)

app.listen(PORT, () => {
  console.log(`A porta esta ouvindo na ${PORT}`);
});
