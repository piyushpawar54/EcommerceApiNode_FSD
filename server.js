const express = require("express");

const configs = require("./config/serverconfigs");
const categoryRoutes = require("./routes/category.routes");

const app = express();

categoryRoutes(app);

app.listen(configs.PORT, () => {
  console.log("server started");
});
