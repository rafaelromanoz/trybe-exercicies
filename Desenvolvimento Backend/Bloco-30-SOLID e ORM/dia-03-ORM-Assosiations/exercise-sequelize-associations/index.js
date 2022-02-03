const bodyParser = require('body-parser');

const express = require('express');
const hospitalRouter = require('./routes/hospitalRouter');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', hospitalRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});