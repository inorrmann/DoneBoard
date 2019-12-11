// $("#createButton").on("click", function () {
//     console.log("clicked");
//     $.ajax({
//         method: "GET",
//         url: "/api/users"
//     }).then(function (data) {
//         console.log(data);
//     })
// });


$("#viewButton").on("click", function () {
    console.log("clicked");
    let username = document.querySelector("#user-info [name=username]").textContent;
    console.log(username);

    $.ajax({
        method: "GET",
        url: `/projects/${username}`
    }).then(function (data) {
        // console.log(data);
        console.log("ajax call completed")
    });
})




