const db = require("../models");
const router = require("express").Router();




router.get("/tasks", function (req, res) {
    db.Task.findAll({}).then(function (dbTask) {
        res.json(dbTask);
    });
});


router.post("/tasks", function (req, res) {
    db.Task.create(req.body).then(function (dbTask) {
        return res.json(dbTask);
    });
});


router.delete("/tasks/:id", function (req, res) {
    db.Task.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbTask) {
        res.json(dbTask)
    });
});


router.put("/tasks", function (req, res) {
    console.log(req.body)
    db.Task.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function (dbPost) {
            res.json(dbPost)
        });
});

module.exports = router