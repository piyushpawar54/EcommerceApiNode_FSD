const productService = require("../services/product.services");

const getProducts = async (req, res) => {
  const products = await productService.getProducts(req.query);
  res.json({
    message: "Fetched all the products successfully!!",
    success: true,
    code: 200,
    data: products,
  });
};

const createProducts = async (req, res) => {
  const response = await productService.createProduct(req.body);
  res.json({
    message: "Successfully created a product",
    success: true,
    code: 200,
    data: response,
  });
};

module.exports = {
  getProducts,
  createProducts,
};
