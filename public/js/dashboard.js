$("#create").on("submit", function(){
    $.ajax({
        url: "/api/projects",
        method: "GET"
    }).then(function(data){
        console.log(data);
    });
});