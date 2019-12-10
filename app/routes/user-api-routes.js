const db = require("../models");
const router = require("express").Router();

router.post("/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
        return res.json(dbUser);
    })
});

router.get("/users", function (req, res) {
    db.User.findAll({
        order: ['id'],
        include: [db.Task, db.Project]
    }).then(function(dbUser) {
        res.json(dbUser);
    });
});

<<<<<<< HEAD
// this one is not working!
=======
// delete user will not delete a task
>>>>>>> master
router.delete("/users/:id", function(req, res) {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbUser) {
        res.json(dbUser);
    });
});

module.exports = router