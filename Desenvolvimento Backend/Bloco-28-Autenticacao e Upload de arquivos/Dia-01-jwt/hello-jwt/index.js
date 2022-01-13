require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const { createUserController } = require('./controllers/userController');
const { loginController } = require('./controllers/loginController');
const middlewares = require('./middlewares');
const { getMeController } = require('./controllers/getMeController');
const auth = require('./middlewares/auth');
const { topSecret } = require('./controllers/topSecretController');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', createUserController);
app.post('/login', loginController);
app.get('/users/me', auth, getMeController);
app.get('/top-secret', auth, topSecret);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
