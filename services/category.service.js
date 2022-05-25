const Category = require("../models/index").Categories;

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const createCategory = async (data) => {
  const newCategory = await Category.create({
    name: data.name,
    description: data.description,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return newCategory;
};

const deleteCategory = async (categoryId) => {
  await Category.destroy({
    where: {
      id: categoryId,
    },
  });
};

const getCategory = async (categoryId) => {
  const responce = await Category.findOne({
    where: {
      id: categoryId,
    },
  });
  return responce;
};

const getCategoryByName = async (categoryName) => {
  const responce = await Category.findOne({
    where: {
      name: categoryName,
    },
  });
  return responce;
};

const updateCategory = async (categoryId, data) => {
  const updatedCategory = await Category.update(data, {
    where: {
      id: categoryId,
    },
  });
  return updatedCategory;
};

module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
  getCategory,
  getCategoryByName,
  updateCategory,
};
