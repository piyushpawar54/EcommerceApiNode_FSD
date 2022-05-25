const productService = require("../services/product.services");

const getProducts = async (req, res) => {
  const response = await productService.getProducts();
  res.json({
    message: "Fetched all the products successfully",
    success: true,
    code: 200,
    data: response,
  });
};

module.exports = {
  getProducts,
};
