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
  "/",
  "\\"
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
  "z"
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
  "Z"
];

function getPasswordOptions(){
  var length = parseInt(prompt("How many characters would you like your password to contain"), 10);

  if(Number.isNaN(length)){
    alert("Password length must be provided as a number")
    return null;
  }

  if(length < 8) {
    alert("Password length must be at least 8 characters")
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
    "Click OK to confirm including lower case characters"
  )

  var hasUpperCaseCharacters = confirm(
    "Click OK to confirm including upper case characters"
  )
  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false
    ) {
      alert("Must select at least one character type");
      return null
    }

    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasUpperCaseCharacters: hasUpperCaseCharacters,
      hasLowerCaseCharacters: hasLowerCaseCharacters,
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
    possibleCharacters = possibleCharacters.concat(SpecialCharacters)
    guaranteedCharacters.push(getRandom(SpecialCharacters));
  } 

  if(options.hasNumericCharacters){
    possibleCharacters = possibleCharacters.concat(NumericCharacters)
    guaranteedCharacters.push(getRandom(numericCharacters));
  } 

  if(options.hasUpperCaseCharacters){
    possibleCharacters = possibleCharacters.concat(UpperCaseCharacters)
    guaranteedCharacters.push(getRandom(UpperCaseCharacters));
  } 

  if(options.hasLowerCaseCharacters){
    possibleCharacters = possibleCharacters.concat(LowerCaseCharacters)
    guaranteedCharacters.push(getRandom(LowerCaseCharacters));
  } 

  for(var index = 0; index < options.length; index++){
    possibleCharacters = getRandom(possibleCharacters);
  }

 results.push(possibleCharacters);
}

for(var index = 0; index < guaranteedCharacters.length; index++){
  results[index] = guaranteedCharacters[index];
}

console.log(possibleCharacters);
console.log(results);

return results.join(" ");


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
