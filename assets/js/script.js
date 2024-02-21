// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey, you clicked the button!");

  // Prompt the user for the password length
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate the input
  if (isNaN(length) || length < 8 || length > 128) {
    // If the input is invalid, prompt the user again until a valid input is provided
    length = parseInt(prompt("Invalid length! Please enter a number between 8 and 128:"));
  }

  // Prompt the user for including lowercase, uppercase, numbers, and special characters
  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSpecialCharacters = confirm("Do you want to include special characters?");

  // Characters pool based on user's preferences
  var characters = "";
  if (includeLowercase) {
    // Include lowercase letters
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    // Include uppercase letters
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    // Include numbers
    characters += "0123456789";
  }
  if (includeSpecialCharacters) {
    // Include special characters
    characters += "!@#$%^&*()-_=+[]{}|;:,.<>?";
  }

  // Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    // Randomly select characters from the characters pool to construct the password
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

