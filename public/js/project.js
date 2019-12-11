let collaborators = [];
let users = [];

// Getting users from db to compare against project collaborators
$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then(function(data) {
    data.forEach(user => {
      // pushing them into an array
      users.push(user.username);
    });
    console.log(users);
  });

  // click event for adding collaborator
  $("#addCollab").on("click", function() {
    event.preventDefault();
    let collaborator = $(this)
      .prev()
      .val();

    // function returning person === collab
    const collab = person => {
      return person === collaborator;
    };

    console.log(collaborator);
    //  comparing input with db users
    if (users.some(collab)) {
      // comparing input with already chosen collaborators
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

  // creating project with array of collaborators
  $("#projects-form").on("submit", function() {
    event.preventDefault();
    let title = $("#projects-title").val();
    $.ajax({
      data: { title: title, username: collaborators},
      url: "/api/projects",
      method: "POST"
    }).then(function(data) {});
    location.href = "/boards";
  });
});
