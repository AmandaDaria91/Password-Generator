// Assignment Code
var generateBtn = document.querySelector("#generate");

//declaring variable defaults
let password;
var userChoiceSpecChar;
var userChoiceLowerChar;
var userChoiceUpperChar;
var userChoiceNumber;
var userChoiceLength;


// arrays store potential characters to be generated for the password
var  specialCharOptions = ["!", "@", "#", "$", "%", "&", "*", ".", "_"];
var  letterOptionsLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var  letterOptionsUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var  numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 

// empty array for possible characters
let possibleCharOptions = [];

// generatePassword function
function generatePassword () {
  //prompt user for length of PW
  userChoiceLength = parseInt(prompt("How long would you like your password to be?"));
  //verify user selects length between 8 and 128
  if (userChoiceLength < 8 || 128 < userChoiceLength) {
    alert("Only passwords between the 8 - 128 can be generated");
    return;
  }

  //verify input is an integer
  if (!Number.isInteger(userChoiceLength)) {
    alert("Length must be an integer!");
    return;
  }

  else {
    //prompt user for special char inclusion using okay or cancel
    userChoiceSpecChar = confirm("Would you like special characters included?");
    // if user selects Okay to special characters than use specialCharOptions array and add elements into empty array
    if (userChoiceSpecChar === true) {
      possibleCharOptions = possibleCharOptions.concat(specialCharOptions);
    }

    //prompt user for lower char inclusion using okay or cancel
    userChoiceLowerChar = confirm("Would you like lowercase letters included?");
    // if user selects Okay to lower than use letterOptions array and add elements into empty array
    if (userChoiceLowerChar === true) {
      possibleCharOptions = possibleCharOptions.concat(letterOptionsLower);
    }

    //prompt user for upper char inclusion using okay or cancel
    userChoiceUpperChar = confirm("Would you like uppercase letters included?");
    //if user selects Okay to Upper than use letterOptions array and change value to upper and add elements into empty array
    if (userChoiceUpperChar === true) {
      possibleCharOptions = possibleCharOptions.concat(letterOptionsUpper);
    }

    //prompt user for upper char inclusion using okay or cancel
    userChoiceNumber = confirm("Would you like numbers included?");
    // if user selects Okay to special characters than use specialCharOptions array and add elements into empty array
    if (userChoiceNumber === true) {
      possibleCharOptions = possibleCharOptions.concat(numberOptions);
    }

    //user must select one character type 
    if (!userChoiceSpecChar && !userChoiceLowerChar && !userChoiceUpperChar && !userChoiceNumber) {
      alert("You must select one character type");
      return;
    }

    else {
      // //for loop the amount of times for the length specified by usern to randomly select between the 3 arrays
      let result = [];
      for (var i = 0; i < userChoiceLength; i++) {  
        var randomChar = possibleCharOptions[Math.floor(Math.random() * possibleCharOptions.length)];
        console.log(randomChar);
        result.push(randomChar);
        console.log(result);
      }
      // brings characters from array to string without commas
      return result.join('');
    }
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //reset defaults
  userChoiceSpecChar = null;
  userChoiceLowerChar = null;
  userChoiceUpperChar = null;
  userChoiceNumber = null;
  userChoiceLength = 0;
}

generateBtn.addEventListener("click", writePassword);
// Add event listener to generate button
