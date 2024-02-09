// Assignment code here


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

function generatePassword() {
var minNum = 8
var maxNum = 128
var lettersBig = ['A', 'B','C','D', 'E', 'F', 'G', 'H', 'I', 'K', 'L' ,'M', 'N', 'O','P','Q', 'R','S','T','U','V','W','X','Y','Z'];
var letterSmall = ['a', 'b', 'c', 'd','e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','r','s','t','u','v','w','x','y','z'];
var passwordSize = NaN;
var numbers = math.random*10;
var passwordSize = NaN;
var useBig, useSmall, useChars, useNums = false;
var C
}

do {
   lettersBig = confirm("")
}