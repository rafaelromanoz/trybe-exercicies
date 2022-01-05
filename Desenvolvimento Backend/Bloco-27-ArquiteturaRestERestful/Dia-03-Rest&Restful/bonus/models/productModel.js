const connection = require('./connection');
const { ObjectId } = require('mongodb')
const add = async (name, brand) => {
  try {
    const conn = await connection();
    const {insertedId} = await conn.collection('products').insertOne({name, brand})

    return { id: insertedId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const conn = await connection();
    const result = await conn.collection('products').find({}).toArray();
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const conn = await connection();
    const result = await conn.collection('products').find(new ObjectId(id)).toArray();
    if (result.length === 0) return null
    return result[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const conn = await connection();
    const result = await conn.collection('products').updateOne({"_id": ObjectId(id)}, { 
      $set: {name, brand}
    });
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const conn = await connection();
    const result = await conn.collection('products').deleteOne({"_id": ObjectId(id)});
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };