// Assignment Code
var generateBtn = document.querySelector("#generate");

//TODO: create an object to store the arrays for generate passwords to be generated from
var options = {
  specialCharOptions: ["!", "@", "#", "$", "%", "&", "*", ".", "_"],
  letterOptions: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numberOptions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], 
}

// TODO: generatePassword function
function generatePassword () {
  //prompt user for length of PW
  var userChoiceLength = window.prompt("How long would you like your password to be?");
  //verify user selects length between 8 and 128
  if (userChoiceLength < 8 || 128 < userChoiceLength) {
    window.alert("Only passwords between the 8 - 128 can be generated");
    return;
  }

  //prompt user for special char inclusion using okay or cancel
  var userChoiceSpecChar = window.confirm("Would you like special characters included?");

  //prompt user for lower char inclusion using okay or cancel
  var userChoiceLowerChar = window.confirm("Would you like lowercase letters included?");

  //prompt user for upper char inclusion using okay or cancel
  var userChoiceUpperChar = window.confirm("Would you like uppercase letters included?");

  //prompt user for upper char inclusion using okay or cancel
  var userChoiceNumber = window.confirm("Would you like numbers included?");

  // TODO: if user selects Okay to Upper than use letterOptions array and change value to upper
  if (userChoiceUpperChar) {
    options.userChoiceUpperChar.upperCase();
  }

  //TODO: user must select one character type 
  if (!userChoiceSpecChar || !userChoiceLowerChar || !userChoiceUpperChar || !userChoiceNumber) {
    window.alert("You must select one character type");
    return;
  }

  // //TODO: for loop the amount of times for the length specified to randomly select between the 3 arrays
  // for (var i = 0; i =< userChoiceLength.length; i++) {
  //   var randomPass = specialCharOptions[Math.floor(Math.random() * userChoiceSpecChar)];
  //   var randomPass = userChoiceLowerChar[Math.floor(Math.random() * userChoiceLowerChar)];
  //   var randomPass = userChoiceUpperChar[Math.floor(Math.random() * userChoiceUpperChar)];
  //   var randomPass = Math.floor(Math.random() * userChoiceNumber);
  // }
  // return randomPass;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
