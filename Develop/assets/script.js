// Assignment code here
function generatePassword() {
var length = prompt("How long would you like your password to be? (please choose a number between 8-128)", 8);
alert(!isNaN(length));
// confirm("Would you like special characters?")

// confirm("Would you like numbers?")

// confirm("Would you like uppercase letters?")

// confirm("Would you like lowercase letters?")
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
