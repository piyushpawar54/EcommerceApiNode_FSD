const getCategory = (req, res) => {
  //Some controller logic
  return res.json({
    message: "Fetched the category successfully",
    success: true,
    code: 200,
    data: {
      name: "electronics",
      description: "dummy description",
    },
  });
};

module.exports = {
  getCategory,
};
