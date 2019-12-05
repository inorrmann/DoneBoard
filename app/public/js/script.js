//This will eventually come from DB
/*
{
    title:'',
    stage: 0,1,2,
    time: Moment or js Date,
    deadline: Moment or JS Date
    sendAlerts: boolean
}

stage - Stage determines how we know which column to place a todo in
*/
var ourTodos = [
  {
    title: "Do Laundry to do",
    id: 0,
    stage: 0,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  },
  {
    title: "Do Laundry progress",
    id: 1,
    stage: 1,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  },
  {
    title: "Do Laundry done",
    id: 2,
    stage: 2,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  }
];
$("#save-changes").click(function() {
  const input = $("#to-do-item").val();
  //making a request to backend to save it to database.
  ourTodos.push({
    title: input,
    stage: 0,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  });
  $("#to-do-item").val("");
  placeTodos();
});

$(document).on("click", ".next-stage", function() {
  const currentId = +$(this).attr("data-id");
  const itemIndex = ourTodos.findIndex(function(todo) {
    return todo.id === currentId;
  });
  if (itemIndex > -1) {
    ourTodos[itemIndex].stage++;
    placeTodos();
  }
});
/* This map allows to maintain numbers and dynamically reference their Ids */
const stageMap = {
  0: "to-do",
  1: "in-progress",
  2: "done"
};

function placeTodos() {
  clearTodos();
  //Make DB req to get new data
  ourTodos.forEach(function(todo) {
    $(`#${stageMap[todo.stage]} .todo-holder`).append(
      `<p class="todo-child">${todo.title}</p>${
        todo.stage === 0 || todo.stage === 1
          ? `<button class="next-stage" data-id="${todo.id}">Increase Stage</button>`
          : ""
      }`
    );
  });
}

function clearTodos() {
  $(".todo-holder").map(function(i, element) {
    $(element).empty();
  });
}

placeTodos();
