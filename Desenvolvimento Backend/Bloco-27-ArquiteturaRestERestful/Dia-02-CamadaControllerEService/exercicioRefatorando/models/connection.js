const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  user: process.env.USER,
  password: process.env.MYSQL_PWD,
  host: process.env.MYSQL_HOST,
  database: 'cep_lookup_refactoring'
});

module.exports = connection;