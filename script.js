// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var length = prompt("How long would you like your password to be? Between 8 and 128 characters");
  while(length < 8 || length > 128){
    length = prompt("How long would you like your password to be? Between 8 and 128 characters");
  }
  var lowerCase = confirm("Would you like to have lowercase letters in your password?")

  var upperCase = confirm("Would you like to have uppercase letters in your password?")

  var numeric = confirm("Would you like to have numbers in your password?")

  var specialCharacters = confirm("Would you like to have special characters in your password?")
while(lowerCase === false && upperCase === false && numeric === false && specialCharacters === false){
  alert("Please select atleast one type")
  lowerCase = confirm("Would you like to have lowercase letters in your password?")

  upperCase = confirm("Would you like to have uppercase letters in your password?")

  numeric = confirm("Would you like to have numbers in your password?")

   specialCharacters = confirm("Would you like to have special characters in your password?")
}

  console.log(length);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
