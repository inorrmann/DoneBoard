const db = require("../models");
const router = require("express").Router();

router.post("/projects", function(req, res) {
    db.Project.create(req.body).then(function(dbProject) {
        return res.json(dbProject);
    });
    // db.User_Project_Relationship.create({
    //     // need to figure out what the entry for this needs to be
    //     // if it's belongstoMany then there's no need to create this relationship since it's being created automatically
    // })
});


router.get("/projects", function(req, res) {
    db.Project.findAll({
        include: [db.Task, db.User]
    }).then(function(dbProject) {
        return res.json(dbProject)
    })
})

module.exports = router