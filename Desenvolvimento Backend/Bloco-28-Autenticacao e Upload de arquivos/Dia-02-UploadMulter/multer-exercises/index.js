require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {directory, upload} = require('./config/upload');
const { uploadMany }= require('./config/uploadMany');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const uploadController = require('./controllers/uploadController');
const multipleUpdateController = require('./controllers/multipleController');

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

app.use(express.static(directory));

app.post('/uploads', upload.single('file') , uploadController);

app.post('/multiple', uploadMany.array('files'), multipleUpdateController )

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
