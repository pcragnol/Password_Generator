// "Generate Password" button
var generateBtn = document.querySelector("#generate");

// var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var uppercase = lowercase.map(i => i.toUpperCase());
// var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Object of characters and their types
var characters = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  special: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
};

// Generates and displays user's password
function generatePassword() {

  // // Start Version 2

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
  //   if (confirm("Would you like to include lowercase characters?")) {
  //     eligibleCharacters = eligibleCharacters.concat(lowercase);
  //   }
    
  //   if (confirm("Would you like to include uppercase characters?")) {
  //     eligibleCharacters = eligibleCharacters.concat(uppercase);
  //   }
    
  //   if (confirm("Would you like to include numeric characters?")) {
  //     eligibleCharacters = eligibleCharacters.concat(numeric);
  //   }
    
  //   if (confirm("Would you like to include special characters?")) {
  //     eligibleCharacters = eligibleCharacters.concat(special);
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

  // // End Version 2


  // Start Version 3
  
  // Creates variable to store user's desired password length
  var passwordLength;

  // Asks user how long they'd like their password to be
  function askPasswordLength() {
    passwordLength = prompt("Please enter a password length between 8 and 128 characters.");
    // Repeats function if user selected invalid password length
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Oops! Please enter a valid password length.");
      askPasswordLength();
    }
  }
  
  // Executes function to obtain password length
  askPasswordLength();

  // Creates variable to store characters for user's desired character types
  var eligibleCharacters = [];

  // Asks user what character types they'd like to include for each character type in characters object
  function askCharacterTypes() {
    for (const [key, value] of Object.entries(characters)) {
      if (confirm(`Would you like your password to include ${key} characters?`)) {
        eligibleCharacters = eligibleCharacters.concat(value);
      }
    }
    // Repeats function if user did not select any character types
    if (!eligibleCharacters.length) {
      alert("Oops! Please select at least one character type.");
      askCharacterTypes();
    }
  }

  // Executes function to obtain eligible characters
  askCharacterTypes();

  // Creates array to store chracters for randomly generated password
  var passwordArray = [];
  
  // Adds a random character from the array of eligible characters to passwordArray until desired length is achieved
  for (var i = 0; i < passwordLength; i++) {
    passwordArray[i] = eligibleCharacters[Math.floor(Math.random() * eligibleCharacters.length)];
  }
  
  // Joins passwordArray into a single string. This is the user's password.
  var password = passwordArray.join("");
  
  // End Version 3

  // Text area that will display user's password
  var passwordText = document.querySelector("#password");
  
  // Displays user's password to the text area
  passwordText.value = password;
  
}

// Executes function to generate and display password when user clicks "Generate Password" button
generateBtn.addEventListener("click", generatePassword);
