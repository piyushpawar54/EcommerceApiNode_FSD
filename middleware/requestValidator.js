const validateCategoryCreationRequest = (req, res, next) => {
  if (!req.body.name) {
    return res.json({
      success: false,
      code: 400,
      message: "Name of category is not present",
    });
  }
  next();
};

const validateProductCreationRequest = (req, res, next) => {
  if (!req.body.name || !req.body.cost || !req.body.categoryId) {
    return res.json({
      success: false,
      code: 400,
      message: "Arguments missing for creating product",
    });
  }
  next();
};

module.exports = {
  validateCategoryCreationRequest,
  validateProductCreationRequest,
};
