require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { directory, upload } = require('./config/upload');
const { uploadMany } = require('./config/uploadMany');
const { uploadProfile } = require('./config/updateProfilePic');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const uploadController = require('./controllers/uploadController');
const multipleUpdateController = require('./controllers/multipleController');
const { profileById, profileController } = require('./controllers/profileController');

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

app.post('/uploads', upload.single('file'), uploadController);

app.post('/multiple', uploadMany.array('files'), multipleUpdateController);

app.get('/profile/:id', profileById);

app.post('/profile', uploadProfile.single('file'), profileController);

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
