const db = require("../models/");
const router = require("express").Router();

router.get("/projects",function(req, res){
    return res.render("projects");
})

router.get("/dashboard",function(req, res){
    return res.render("dashboard");
})

module.exports = router