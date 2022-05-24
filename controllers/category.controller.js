const categoryService = require("../services/category.service");

const getCategory = async (req, res) => {
  //Some controller logic
  const response = await categoryService.getAllCategories();
  return res.json({
    message: "Fetched the category successfully",
    success: true,
    code: 200,
    data: response,
  });
};

module.exports = {
  getCategory,
};
