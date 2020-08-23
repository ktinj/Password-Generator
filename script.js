// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", prompt);
function getPasswordOptions(){
  var generate = prompt("How many characters would you like your password to contain?");
  alert (generate); 
}
var expectSpecialChars = false;
var expectNumericChars = false;
var expectUppercaseChars = false;
var expectLowercaseChars = false;
var userOptions = {
expectSpecialChars: false,
expectNumericChars: false,
expectUppercaseChars: false,
expectLowercaseChars: false,
}

    //arrays
    // ======= vars definition ======
   // Array of special characters to be included in password
   var specialCharactersArray = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
];
 // Array of numeric characters to be included in password
var numericCharactersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 // Array of lowercase characters to be included in password
var lowerCaseCharactersArray = [
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
 // Array of uppercase characters to be included in password
 var upperCaseCharactersArray = [
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
 var userOptionalChars = [];
  
// check if PW length is a number
if (isNaN(length) === true) {
  alert("Password length must be provided as a number");

}
// check if PW length is at least 8 characters long
if (length < 8) {
  alert("Password length must be at least 8 characters!");

}

// check if PW is less than 128 characters
if (length > 128) {
  alert("Password length must be less than 128 characters");

}

var hasSpecialCharacters = confirm(
  'Click OK to confirm including special characters.'
);

var hasNumericCharacters = confirm(
  'Click OK to confirm including numeric characters.'
);

var hasLowercaseCharacters = confirm(
  'Click OK to confirm including lowercase characters.'
);

var hasUppercaseCharacters = confirm(
  'Click OK to confirm including uppercase characters.'
);

if (
  hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasLowerCaseCharacters === false &&
  hasUpperCaseCharacters === false 
) {
  alert("Must select at least one character type");
}
// password options
var passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCaseCharacters: hasLowerCaseCharacters,
  hasUpperCaseCharacters: hasUpperCaseCharacters
};

// random element from array
function getRandom (arr) {
var randIndex = Math.floor(Math.random() * arr.length);
var randElement = arr[randIndex];
}
// generate password with user input
function generatePassword() {
var options = getPasswordOptions ();
var result = [];
// array for types of characters
var possibleCharacters = [];
// array for guaranteed characters
var guaranteedCharacters = [];
// conditional statement that adds array of special characters
if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters));
}

if (options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters));
}

if (options.hasLowerCaseCharacters) {
  possibleCharacters = possibleCharacters.concat(LowerCaseCharacters);
  guaranteedCharacters.push(getRandom(LowerCaseCharacters));
}

if (options.UpperCaseCharacters) {
  possibleCharacters = possibleCharacters.concat(UpperCaseCharacters);
  guaranteedCharacters.push(getRandom(UpperCaseCharacters));
}
for (var i = 0; i < options.length; i++) {
  var possibleCharacter = getRandom(possibleCharacters);
  result.push(possibleCharacter);
}  

for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}
