const express = require("express");
const bodyParser = require("body-parser");
const configs = require("./config/serverconfigs");
const categoryRoutes = require("./routes/category.routes");
const app = express();

//We need a middleware that will help express to ready all query  and body params, below code is for config.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

categoryRoutes(app);

app.listen(configs.PORT, () => {
  console.log("server started");
});
