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
status - status determines how we know which column to place a todo in
*/
var todoTitle;

var ourTodos = [
  {
    title: `${todoTitle}`, //we can add title task here
    id: 0,
    status: 0,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  },
  {
    title: `${todoTitle}`,
    id: 1,
    status: 1,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  },
  {
    title: `${todoTitle}`,
    id: 2,
    status: 2,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  }
];
$("#save-changes").click(function() {
  const input = $("#to-do-item-title").val();
  //making a request to backend to save it to database.
  ourTodos.push({
    title: input,
    status: 0,
    createdAt: new Date(),
    deadline: new Date("12/05/2019"),
    sendAlerts: false
  });
  $("#to-do-item-title").val("");
  placeTodos();
});

// drag and drop below
// ============================================================================================================
// ============================================================================================================
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// `<span id="drag1" draggable="true" ondragstart="drag(event)" width="336" height="69"></span>`

// ============================================================================================================
// drag and drop above

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
          ? `<button class="next-status todo-holder" draggable="true" ondragstart="drag(event)" data-id="${todo.id}">Increase status</button>`
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
