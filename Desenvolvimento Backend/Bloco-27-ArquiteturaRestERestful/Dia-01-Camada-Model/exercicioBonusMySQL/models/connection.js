const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'rafael',
  password: 'lol123lol321@@3L',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;