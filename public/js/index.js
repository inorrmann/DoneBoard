$("#registerBtn").on("submit", function() {
    event.preventDefault();
    let title = $("#projects-title").val();
    
    $.ajax({
      data: { first_name: title, last_name: collaborators, username: , email: , phone_number: },
      url: "/api/projects",
      method: "POST"
    }).then(function(data) {});
    console.log(projectObj);
  });
