const express = require("express");
const bodyParser = require("body-parser");
const configs = require("./config/serverconfigs");
const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");
const app = express();

const Product = require("./models/index").Product;
const Categories = require("./models/index").Categories;
const db = require("./models/index");
//We need a middleware that will help express to ready all query  and body params, below code is for config.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

categoryRoutes(app);
productRoutes(app);
authRoutes(app);
cartRoutes(app);

app.get("/home", async function (req, res) {
  const getCategories = await Categories.findAll({ include: Product });
  res.json(getCategories);
});

app.listen(configs.PORT, async () => {
  /* const newProduct = await Product.create({
    name: "Ipad",
    cost: 100000,
    description: "apple ipad",
    categoryId: 1,
  }); */

  await db.sequelize.sync({ alter: true });

  console.log(`Server started at port ${configs.PORT}`);
});
