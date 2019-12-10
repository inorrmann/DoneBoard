const db = require("../models");
const router = require("express").Router();

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