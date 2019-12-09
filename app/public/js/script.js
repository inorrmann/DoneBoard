var validator = require("validator")

// for the sign-up page where the user enters the information, please make sure you have restrictions for the fields to enter the email and phone number so only valid entries are accepted (regex for that probably). For the username, please convert it to lowercase, and for the first name and last name, please make it lowercase and the then capitalize the initial since that will be the info that will show up in the string of edits on the tasks boards


let email = "theadventureking@gmail.com"

// regular expression email check function
// ===========================================================================
// function emailCheck() {
//   if (/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(email))
//   {
//     console.log(email)
//     return (true)
//   }
//   console.log("Please enter a valid email address!")
//   return (false)
// }

// emailCheck(email);
// ===========================================================================

function validEmail(x) {
  if (validator.isEmail(email) === false) {
    console.log("Please enter a valid email address!")
  } else return true;
}
// console.log(validEmail(email))

// need to take number and omit dashes for the purpose of returning as a string later on

let phone = 818555555;
let phoneStr;

function validPhone() {
  phoneStr = phone.toString();
  console.log(validator.isMobilePhone(phoneStr))
  if (validator.isMobilePhone(phoneStr) === false) {
    console.log("invalid number")
  } else return true;
}


validPhone(phone)

// regex phone
// /^(?([0-9]{3}))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/











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






// html below for phone number
/*
<label for="phone">Enter your phone number:</label>

<input type="tel" id="phone" name="phone"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required>

<small>Format: 123-456-7890</small>
*/
