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
const projectsApiRoutes = require("./app/routes/projects-api-routes");
const tasksApiRoutes = require("./app/routes/tasks-api-routes");
const userApiRoutes = require("./app/routes/user-api-routes");
const htmlRoutes = require("./app/routes/html-routes.js");
app.use("/api/", projectsApiRoutes)
app.use("/api/", tasksApiRoutes)
app.use("/api/", userApiRoutes)
app.use("/", htmlRoutes)

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
