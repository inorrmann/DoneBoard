// on click event for register form that will redirects to dashboard
$("#register-form").on("submit", function () {
    event.preventDefault();
    console.log("clicked");

    var first_name = document.querySelector("#register-form [name=registerInput1]").value.trim();
    var last_name = document.querySelector("#register-form [name=registerInput2]").value.trim();
    var username = document.querySelector("#register-form [name=registerInput3]").value.trim();
    var email = document.querySelector("#register-form [name=registerInput4]").value.trim();
    var phone_number = document.querySelector("#register-form [name=phone]").value.trim();

    let newUser = { first_name: first_name, last_name: last_name, username: username, email: email, phone_number: phone_number }
    $.ajax("/api/users", {
        type: "POST",
        data: newUser
    }).then(function () {

        // move to the dashboard page for this particular username
        location.href = `/dashboard/${newUser.username}`
    })
});
