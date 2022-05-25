const express = require("express");
const bodyParser = require("body-parser");
const configs = require("./config/serverconfigs");
const categoryRoutes = require("./routes/category.routes");
const app = express();

const Product = require("./models/index").Product;
const Categories = require("./models/index").Categories;
//We need a middleware that will help express to ready all query  and body params, below code is for config.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

categoryRoutes(app);

app.get("/home", async function (req, res) {
  const getproducts = await Product.findAll({ include: Categories });
  res.json(getproducts);
});

app.listen(configs.PORT, async () => {
  /* const newProduct = await Product.create({
    name: "Ipad",
    cost: 100000,
    description: "apple ipad",
    categoryId: 1,
  }); */
});
