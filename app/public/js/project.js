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

// addBtn.addEventListener("clicked", function(){
//     console.log("clicked");
// })

addCollabs();
