const connection = require('./connection');

const savePlantsModel = async (plants) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('exercices_solid').insertOne({ ...plants });
  return insertedId;
};

module.exports = {
  savePlantsModel,
};
