// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = lowercase.map(i => i.toUpperCase());
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// var characters = {
//   lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//   uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
//   numeric: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   special: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
// };

// Write password to the #password input
function writePassword() {

  // // Start Version 1

  // var passwordLength = prompt("Please enter a password length between 8 and 128 characters.");
  
  // var eligibleCharacters = [];
  
  // if (confirm("Would you like to include lowercase characters?")) {
  //   eligibleCharacters = eligibleCharacters.concat(lowercase);
  // }
  
  // if (confirm("Would you like to include uppercase characters?")) {
  //   eligibleCharacters = eligibleCharacters.concat(uppercase);
  // }
  
  // if (confirm("Would you like to include numeric characters?")) {
  //   eligibleCharacters = eligibleCharacters.concat(numeric);
  // }
  
  // if (confirm("Would you like to include special characters?")) {
  //   eligibleCharacters = eligibleCharacters.concat(special);
  // }
  
  // var passwordArray = [];
  
  // for (var i = 0; i < passwordLength; i++) {
  //   passwordArray[i] = eligibleCharacters[Math.floor(Math.random() * eligibleCharacters.length)];
  // }
  
  // var password = passwordArray.join("");

  // // End Version 1


  // Start Version 2

  var passwordLength;

  function askPasswordLength() {
    passwordLength = prompt("Please enter a password length between 8 and 128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Oops! Please enter a valid password length.");
      askPasswordLength();
    }
  }
  
  askPasswordLength();

  
  var eligibleCharacters = [];

  function askCharacterTypes() {
    if (confirm("Would you like to include lowercase characters?")) {
      eligibleCharacters = eligibleCharacters.concat(lowercase);
    }
    
    if (confirm("Would you like to include uppercase characters?")) {
      eligibleCharacters = eligibleCharacters.concat(uppercase);
    }
    
    if (confirm("Would you like to include numeric characters?")) {
      eligibleCharacters = eligibleCharacters.concat(numeric);
    }
    
    if (confirm("Would you like to include special characters?")) {
      eligibleCharacters = eligibleCharacters.concat(special);
    }

    if (eligibleCharacters.length === 0) {
      alert("Oops! Please select at least one character type.");
      askCharacterTypes();
    }
  }

  askCharacterTypes();


  var passwordArray = [];
  
  for (var i = 0; i < passwordLength; i++) {
    passwordArray[i] = eligibleCharacters[Math.floor(Math.random() * eligibleCharacters.length)];
  }
  
  var password = passwordArray.join("");

  // End Version 2


  // // Start Version 3
  
  // var passwordLength;

  // function askPasswordLength() {
  //   passwordLength = prompt("Please enter a password length between 8 and 128 characters.");
  //   if (passwordLength < 8 || passwordLength > 128) {
  //     alert("Oops! Please enter a valid password length.");
  //     askPasswordLength();
  //   }
  // }
  
  // askPasswordLength();

  
  // var eligibleCharacters = [];

  // function askCharacterTypes() {
  //   for (const [key, value] of Object.entries(characters)) {
  //     if (confirm("Would you like to include `${key}` characters?")) {
  //       eligibleCharacters = eligibleCharacters.concat(`${value}`);
  //     }
  //   }
    
  //   if (eligibleCharacters.length === 0) {
  //     alert("Oops! Please select at least one character type.");
  //     askCharacterTypes();
  //   }
  // }

  // askCharacterTypes();


  // var passwordArray = [];
  
  // for (var i = 0; i < passwordLength; i++) {
  //   passwordArray[i] = eligibleCharacters[Math.floor(Math.random() * eligibleCharacters.length)];
  // }
  
  // var password = passwordArray.join("");
  
  // // End Version 3


  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
