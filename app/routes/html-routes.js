const db = require("../models/");
const router = require("express").Router();

router.get("/projects",function(req, res){
    return res.render("../public/html/index.html");
})

module.exports = router