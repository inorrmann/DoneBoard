const db = require("../models/");
const router = require("express").Router();

router.get("/projects",function(req, res){
    return res.render("projects");
})

router.get("/",function(req, res){
    return res.render("index");
})

router.get("/login",function(req, res){
    return res.render("login");
})

router.get("/register",function(req, res){
    return res.render("register");
})

router.get("/boards",function(req, res){
    return res.render("boards");
})

module.exports = router