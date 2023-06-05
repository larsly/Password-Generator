// Assignment code here
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 128;
const DEFAULT_PASSWORD_LENGTH = 16;
const LOWERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SPECIALS = "!@#$%^&*";

function generatePassword() {
  while (true) {
    var length = prompt("How long would you like your password to be? (please choose a number between 8-128)", DEFAULT_PASSWORD_LENGTH);
    if (!isNaN(length) && length > MIN_PASSWORD_LENGTH && length < MAX_PASSWORD_LENGTH) {
      break;
    } else {
        alert(length + " is not a valid number");
    }
  }

  var hasSpecialCharacters = confirm("Would you like special characters?");

  var hasNumbers = confirm("Would you like numbers?");

  var hasUppercase = confirm("Would you like uppercase letters?");

  var hasLowercase = confirm("Would you like lowercase letters?");

  
  var chars = '';
  if (hasLowercase) {
    chars += LOWERS;
  }
  if (hasUppercase) {
    chars += UPPERS;
  }
  if (hasNumbers) {
    chars += NUMBERS;
  }
  if (hasSpecialCharacters) {
    chars += SPECIALS;
  }
  while (true) {
    var password = '';
    for (let i = 0; i < length; i++) {
      password += chars[randRange(0, chars.length)];
    }
    if (validate(hasLowercase, password, LOWERS) == false) {
      continue;
    }
    if (validate(hasUppercase, password, UPPERS) == false) {
      continue;
    }
    if (validate(hasNumbers, password, NUMBERS) == false) {
      continue;
    }
    if (validate(hasSpecialCharacters, password, SPECIALS) == false) {
      continue;
    }
    break;
  };
  return password;
};

function validate (flag, string, charset) {
  if (flag) {
    for (let i = 0; i < charset.length; i++) {
      if (string.includes(charset[i])) {
        return true;
      }
    }
    return false;
  }
  return true;
}

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

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
