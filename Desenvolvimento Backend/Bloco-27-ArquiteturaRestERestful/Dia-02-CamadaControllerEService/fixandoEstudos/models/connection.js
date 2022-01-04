// models/connection.js

const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(process.env.MONGODB_URL, OPTIONS).then((conn) => {
        db = conn.db('estudos');
        return db;
      });
};

module.exports = connection;