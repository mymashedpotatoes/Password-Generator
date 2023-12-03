// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var userPrompts = userInput();
  if (userPrompts) {
    var newpassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = newpassword;
    choicesArray = [];
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//arrays for password
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', ']', '{', '}', '<', '>', '?'];

//starts with empty array and password length
var choicesArray = [];
passwordLength = "";

//prompts for user input
var userInput = function() {
  passwordLength = window.prompt("How many characters would you like the password to be? (8-128 characters)");
  //if password length is not a number or not entered alerts
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Character length must be between 8 and 128 characters. Please try again.");
      choicesArray = [];
      console.log(passwordLength);
      return " "
    }
  var userUppercase = window.confirm("Would you like to add uppercase letters to the password?");
    if (userUppercase) {
      choicesArray = choicesArray.concat(uppercaseArray);
      console.log(userUppercase);
       }
  var userLowercase = window.confirm("Would you like to add lowercase letters to the password?");
    if (userLowercase) {
      choicesArray = choicesArray.concat(lowercaseArray);
      console.log(userLowercase);
    } 
  var userNumbers = window.confirm("Would you like to add numbers to the password?");
    if (userNumbers) {
      choicesArray = choicesArray.concat(numbersArray);
      console.log(userNumbers);
    } 
  var userSpecial = window.confirm("Would you like to add special characters to the password?");
    if (userSpecial) {
      choicesArray = choicesArray.concat(specialArray);
      console.log(userSpecial);
    } 
    //if all choices are cancelled then will alert
  if (!userUppercase && !userLowercase && !userNumbers && !userSpecial) {
    alert("Must choose at least 1 character type.");
    return " "
  }
  return " ";
  
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * choicesArray.length)
    password = password + choicesArray[random];
    console.log(random);
  };
  return password;
} 
