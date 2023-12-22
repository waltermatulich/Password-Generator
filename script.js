// Array aka list of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "-",
  "*",
  "]",
  "]",
  "~",
  "-",
  "_",
  ".",
  "!",
  "?",
  "/",
  "\\",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getPasswordOptions(){
  var length = parseInt(prompt("How many characters would you like your password to contain"), 10);

  if(Number.isNaN(length)){
    alert("Password length must be a provided number")
    return null;
  }

  if(length > 128){
    alert("Password length must be less than 129 characters");
    return null;
  }

  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters"
  )

  var hasLowerCaseCharacters = confirm(
    "Click OK to confirm including lowercase characters"
  )

  var hasUpperCaseCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  )

  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters) {
      alert("Must select at least one character type")
      return null
    }

    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCaseCharacters: hasLowerCaseCharacters,
      hasUpperCaseCharacters: hasUpperCaseCharacters,
    }

    return passwordOptions;

}

function getRandom(arr){
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Function generate
function generatePassword() {
  var options = getPasswordOptions();
  var results = []

  var possibleCharacters = []

  var guaranteedCharacters = [];

  if(!options) return null;

  if(options.hasSpecialCharacters){
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if(options.hasNumericCharacters){
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if(options.hasLowerCaseCharacters){
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  }

  if(options.hasUpperCaseCharacters){
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }

  for(var index = 0; index < options.length; index++) {
    var possibleCharacters = getRandom(possibleCharacters);

    results.push(possibleCharacters);
  }

  for(var index = 0; index < guaranteedCharacters.length; index++) {
    results[index] = guaranteedCharacters[index];
  }

  return results.join("")

}


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
