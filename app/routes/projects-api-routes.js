const db = require("../models");
const router = require("express").Router();

router.post("/projects", function(req, res) {
    db.Project.create({
        title: req.body.title,
        content: req.body.name
    }).then(function(results) {
        return res.json(results);
    });
    db.User_Project_Relationship.create({
        
    })
});


module.exports = router