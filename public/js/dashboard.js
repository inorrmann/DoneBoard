
$("#createButton").on("click", function(){
    console.log("clicked");
    $.ajax({
        method: "GET",
        url: "/api/users"
    }).then(function(data){
        console.log(data);
    })
});