const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const port = 3000;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

app.use(express.static(__dirname + '/public'));

require('./sockets/joker')(io);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`));
