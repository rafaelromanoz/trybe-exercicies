const express = require('express');
const plantRouter = require('./routes/plantsRouter');
const sunnyRouter = require('./routes/sunnyRouter');

const app = express();
const port = 3000;

app.use('/plants', plantRouter);
app.use('/sunny', sunnyRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
