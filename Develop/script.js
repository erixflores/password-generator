// var array=["a","b","c"]
// array[0]  
// array[1]
// array[2]
// Assignment code here
var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM".split("")
var lowers = "qwertyuiopasdfghjklzxcvbnm".split("")
var numbers = "1234567890".split("")
var symbols = "!@#$%^&*(){}[]=<>/,.".split("")

var isUppercase = false
var isLowercase = false
var isNumber = false
var isSymbol = false

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

  // parseInt("10")+3=
  // 10+3=13
  var length = parseInt(prompt("How many characters would you like your password to be?"));

  while (isNaN(length) || length < 8 || length > 128) {

    length = parseInt(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  }

  isUppercase = confirm("Would you like to use uppercase letters?");
  isLowercase = confirm("Would you like to use lowercase letters?");
  isNumber = confirm("Would you like to use numbers?");
  isSymbol = confirm("Would you like to use special characters?");

  var password =""
  var index = 0

 
  for (var i = password.length; i < length; i++) {
        
    if (isUppercase) {
      index = Math.floor(Math.random() * uppers.length)
      password = password + uppers[index]
    }
    if (isLowercase) {
      index = Math.floor(Math.random() * lowers.length)
      password = password + lowers[index]
    }
    if (isNumber) {
      index = Math.floor(Math.random() * numbers.length)
      password = password + numbers[index]
    }
    if (isSymbol) {
      index = Math.floor(Math.random() * symbols.length)
      password = password + symbols[index]
    }
    i = password.length
  }


  return password
}

