//This will eventually come from DB
/*
{
    title:'',
    status: 0,1,2,
    time: Moment or js Date,
    deadline: Moment or JS Date
    sendAlerts: boolean
}
​
status - Stage determines how we know which column to place a todo in
*/
var ourTodos = [
  {
    title: "Do Laundry to do",
    id: 0,
    status: 0,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  },
  {
    title: "Do Laundry progress",
    id: 1,
    status: 1,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  },
  {
    title: "Do Laundry done",
    id: 2,
    status: 2,
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
    status: 0,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  });
  $("#to-do-item").val("");
  placeTodos();
});

$(document).on("click", ".next-status", function() {
  const currentId = +$(this).attr("data-id");
  const itemIndex = ourTodos.findIndex(function(todo) {
    return todo.id === currentId;
  });
  if (itemIndex > -1) {
    ourTodos[itemIndex].status++;
    placeTodos();
  }
});
/* This map allows to maintain numbers and dynamically reference their Ids */
const statusMap = {
  0: "to-do",
  1: "in-progress",
  2: "done"
};

function placeTodos() {
  clearTodos();
  //Make DB req to get new data
  ourTodos.forEach(function(todo) {
    $(`#${statusMap[todo.status]} .todo-holder`).append(
      `<p class="todo-child">${todo.title}</p>${
        todo.status === 0 || todo.status === 1
          ? `<button class="next-status" data-id="${todo.id}">Increase status</button>`
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