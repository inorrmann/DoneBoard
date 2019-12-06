require("dotenv").config();
const express = require("express");

const hbs = require("express-handlebars");
const path = require("path");

const db = require("./app/models");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("hbs", hbs({ defaultLayout: "main.hbs" }));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "/public")));

// router connection (express)
const apiRoutes = require("./app/routes/api-routes");
const htmlRoutes = require("./app/routes/html-routes.js");
app.use("/api/", apiRoutes)
app.use("/", htmlRoutes)

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
