let collaborators = [];

function addCollabs() {
  $("#addCollab").on("click", function() {
    event.preventDefault();
    let collaborator = $(this)
      .prev()
      .val();
    collaborators.push(collaborator);
    $(this)
      .prev()
      .val("");
    $("#collabDiv").append(
      `<small id="" class="form-text text-warning">${collaborator}</small>`
    );
    console.log(collaborators);
  });
}

$("#projects-form").on("submit", function() {
  event.preventDefault();
  let title = $("#projects-title").val();
  // let projectObj = {
  //     title: title,
  //     collaborators: collaborators
  // };
  $.ajax({
    data: { title: title, collaborators: collaborators },
    url: "/api/projects",
    method: "POST"
  }).then(function(data) {});
  console.log(projectObj);
});

// addBtn.addEventListener("clicked", function(){
//     console.log("clicked");
// })

addCollabs();
