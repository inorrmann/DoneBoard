const db = require("../models");

const router = require("express").Router();

router.post("/tasks", function(req, res) {
    db.Task.create({
        name: req.body.name,
        content: req.body.name
    }).then(function(results) {
        return res.json(results);
    })
});

module.exports = router