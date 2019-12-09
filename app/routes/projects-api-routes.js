const db = require("../models");
const router = require("express").Router();

router.post("/projects", function(req, res) {
    db.User_Project_Relationship.create({}).then()
    // Need to somehow get the id of the newly created relationship and
    // use it in the project create below when creating project
    db.Project.create({
        title: req.body.title,
        // inserting newly created relationship here somehow
        UserProjectRelationshipId: req.body.UserProjectRelationshipId
    }).then(function(results) {
        return res.json(results);
    });
    
});


module.exports = router