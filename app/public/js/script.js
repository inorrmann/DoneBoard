var validator = require("validator");


// Verify email below
// ===========================================================================

let email = "theadventureking@gmail.com"

function validEmail(x) {
  if (validator.isEmail(email) === false) {
    console.log("Please enter a valid email address!")
  } else return true;
}
console.log(validEmail(email))

// Verify phone number below
// ===========================================================================

let phone = "(818) 555 5555";

function validPhone() {
  console.log(validator.isMobilePhone(phone))
  if (validator.isMobilePhone(phone) === false) {
    console.log("invalid number")
  } else return true;
}

validPhone(phone)

// Uppercase initials on names below
// ===========================================================================

let name;
// capitalize first letter on name
function upperCase(name) {
  let splitName = name.trim().toLowerCase().split(" ")
  let resultStr = "";
  splitName.forEach(word => {
    resultStr += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    resultStr.trim();
  });
  name = resultStr.trim();
  return name;
};



module.exports = validEmail;