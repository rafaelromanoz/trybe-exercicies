const express = require('express');
const routerPlayer = require('./routes/playerRoutes');
const bodyParser = require('body-parser');

const error = require('./middlewares/errorMiddleware');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json())

app.use('/player', routerPlayer);

app.use(error);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}!`));
