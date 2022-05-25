const Product = require("../models/index").Product;
const Categories = require("../models/index").Categories;

const getProducts = async () => {
  const products = await Product.findAll({ include: Categories });
  return products;
};

const createProduct = async (data) => {
  const product = await Product.create({
    name: data.name,
    description: data.description,
    cost: data.cost,
    categoryId: data.categoryId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return product;
};

module.exports = {
  getProducts,
  createProduct,
};
