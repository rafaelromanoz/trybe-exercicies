const { MongoClient } = require('mongodb');
require('dotenv').config();
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = process.env.MONGODB_URL;

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
        db = conn.db('bd_soccer');
        return db;
      });
};

module.exports = connection;