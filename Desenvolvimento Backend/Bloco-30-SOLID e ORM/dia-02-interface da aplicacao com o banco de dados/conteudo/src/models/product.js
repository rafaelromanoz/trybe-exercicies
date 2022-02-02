'use strict'
const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
  })
  return Product;
};

module.exports = Product;