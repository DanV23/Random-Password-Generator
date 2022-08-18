// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Declaring my variables inside an object
var characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  passLength: 0
}

// Write password to the #password input
function writePassword() {

  // Creating a function to store the length of password
  function passLengthChoice() {
    var passLengthChoice = window.prompt("Please select password length. Must be between 8 and 128 characters long");

    if(passLengthChoice > 7 && passLengthChoice < 129){
      characters.passLength = passLengthChoice;
    } else {
      alert("Please select a password length between 8 and 128 characters long.")
      passLengthChoice();
      return;
    }
  }

  // Creating an array to store concatenation of characters
  var charactersArray = [];
  
  // Creating a function to concatenate lowerCase characters to array
  function lowerCaseChoice() {
    var lowerCaseChoice = window.prompt("Would you like to use lower case letters? Type 'yes' or 'no'");

    if(lowerCaseChoice === "yes") {
      charactersArray = charactersArray.concat(characters.lowerCase);
    }
  }
  
  // Creating a function to concatenate upperCase characters to array
  function upperCaseChoice() {
    var upperCaseChoice = window.prompt("Would you like to use upper case letters? Type 'yes' or 'no'");

    if(upperCaseChoice === "yes") {
      charactersArray = charactersArray.concat(characters.upperCase);
    }
  }

  // Creating a function to concatenate number characters to array
  function numbersChoice() {
    var numbersChoice = window.prompt("Would you like to use numbers? Type 'yes' or 'no'");

    if(numbersChoice === "yes") {
      charactersArray = charactersArray.concat(characters.number);
    }
  }

  // Creating a function to concatenate special characters to array
  function specialCharChoice() {
    var specialCharChoice = window.prompt("Would you like to use special characters? Type 'yes' or 'no'")

    if(specialCharChoice === "yes") {
      charactersArray = charactersArray.concat(characters.symbol);
    }
  }

  // Calling out functions
  passLengthChoice();
  lowerCaseChoice();
  upperCaseChoice();
  numbersChoice();
  specialCharChoice();


  // Creating a for statement to randomize the password according to the length chosen
  // NOT WORKING???
  function generatePassword(){
    var pass = (' ');
    for (i = 0; i < charactersArray.passLength; i++) {
      var char = Math.floor((Math.random() * charactersArray.passLength));
      pass = char;
    }
    return pass;
}


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
