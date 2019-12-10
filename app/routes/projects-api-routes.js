const db = require("../models");
const router = require("express").Router();

<<<<<<< HEAD
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
    
=======
// post new project and user relationship
router.post("/projects", function (req, res) {
// create the project
    db.Project.create({
        title: req.body.title
    }).then(function (dbProject) {
        // get all the users that are connected to the current project
        db.User.findAll({
            where: {
                id: JSON.parse(req.body.UserIds)
            }
        }).then(function (dbUser) {
            // loop through the array of users and create a connection 
            // with the current project
            dbUser.forEach(function(user) {
                dbProject.addUser(user);
            });
        });
        return res.json(dbProject);
    });
>>>>>>> master
});

router.delete("/projects/:id", function(req, res) {
    db.Project.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbProject) {
        res.json(dbProject)
    });
});

// get all projects and include associated tasks and users
router.get("/projects", function (req, res) {
    db.Project.findAll({
        include: [db.Task, db.User]
    }).then(function (dbProject) {
        return res.json(dbProject)
    })
})


// UserProject route USED ONLY FOR TESTING, NOT REALLY NEEDED
// FOR THE WEBSITE, WE CAN DELETE IT ONCE WE DEPLOY
router.get("/userproject", function (req, res) {
    db.UserProject.findAll({

    }).then(function (dbUserProject) {
        return res.json(dbUserProject)
    })
})

module.exports = router