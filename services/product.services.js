const Product = require("../models/index").Product;
const Categories = require("../models/index").Categories;

const getProducts = async () => {
  const products = await Product.findAll({ include: Categories });
  return products;
};

module.exports = {
  getProducts,
};
