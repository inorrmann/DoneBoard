
// click event for modal form
$(document).ready(function(){
    $("#save-changes").on("click", function(){
        event.stopPropagation();
        // setting input data to variables
        let name = $("#taskTitleModal").val();
        let content = $("#taskDescriptionModal").val();
        let username = $("#taskNameModal").val();
        // passing data through ajax call to backend to create task
      $.ajax({
          data: {
              username: username,
              content: content,
              name: name
          },
          url: "/api/tasks",
          method: "POST"
      }).then(function(data){
        location.reload();
      })
    })
})