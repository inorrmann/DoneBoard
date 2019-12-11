const db = require("../models/");
const router = require("express").Router();
let tasksTodo = [];
let tasksInProgress = [];
let tasksDone = [];

router.get("/projects", function (req, res) {
  return res.render("projects");
});

router.get("/", function (req, res) {
  return res.render("index");
});

router.get("/login", function (req, res) {
  return res.render("login");
});

router.get("/register", function (req, res) {
  return res.render("register");
});

// get route to populate boards with tasks
router.get("/boards", function (req, res) {
  db.Task.findAll({}).then(function (dbTask) {
    for (let i = 0; i < dbTask.length; i++) {
      // switch statement for progress status
      switch (dbTask[i].progress_status) {
        case 0:
          let task1 = dbTask[i];
          console.log(dbTask[i])
          tasksTodo.push(task1);
          //   console.log(tasksTodo);
          break;
        case 1:
          let task2 = dbTask[i];
          tasksInProgress.push(task2);
          break;
        case 2:
          let task3 = dbTask[i];
          tasksDone.push(task3);
          break;
      }
    }
    // rendering boards.hbs pushing through arrays to loop through for hbs
    // console.log(tasksTodo);
    res.render("boards", { tasksTodo: tasksTodo, tasksInProgress: tasksInProgress, tasksDone: tasksDone });
    tasksTodo = [];
    tasksInProgress = [];
    tasksDone = [];
  });
});

router.get("/dashboard", function (req, res) {
  return res.render("dashboard");
});

router.get("/dashboard/:username", function (req, res) {
  // console.log(req.params.username);
  var username = { username: req.params.username };
  db.User.findAll({
    where: {
      username: req.params.username
    }
  }).then(function (dbUser) {
    res.render("dashboard", { welcome: dbUser[0].dataValues });
    // console.log(dbUser[0].dataValues)
  })

});


router.get("/projects/:username", function (req, res) {
  console.log("routing");

  
  db.User.findAll({
    where: {
      username: req.params.username
    }
  }).then(function (dbUser) {
    console.log(dbUser[0].dataValues)
    db.UserProject.findAll({
      where: {
        UserId: dbUser[0].dataValues.id
      }
    }).then(function (dbUserProject) {
      let projects = [];

      dbUserProject.forEach(function (connection) {
        projects.push(connection.dataValues);
      })
      console.log(projects)

    })
  })
})



module.exports = router;
