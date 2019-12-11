let collaborators = [];
let users = [];

$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then(function(data) {
    data.forEach(user => {
      users.push(user.username);
    });
    console.log(users);
  });

  $("#addCollab").on("click", function() {
    event.preventDefault();
    let collaborator = $(this)
      .prev()
      .val();

    const collab = person => {
      return person === collaborator;
    };

    console.log(collaborator);

    if (users.some(collab)) {
      if (collaborators.some(collab)) {
        alert("collaborator already added!");
        $(this).prev().val("");
      } else {
        collaborators.push(collaborator);
        $(this).prev().val("");
        $("#collabDiv").append(
          `<small id="" class="form-text text-warning">${collaborator}</small>`
        );
      }
    } else {
      alert("username doesn't exist");
      $(this).prev().val("");
    }

    console.log(collaborators);
  });

  $("#projects-form").on("submit", function() {
    event.preventDefault();
    let title = $("#projects-title").val();
    $.ajax({
      data: { title: title, collaborators: collaborators },
      url: "/api/projects",
      method: "POST"
    }).then(function(data) {});
    console.log(projectObj);
  });
});
