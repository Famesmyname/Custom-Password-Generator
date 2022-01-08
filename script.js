// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define Variables and Constants
const alphaLow = "abcdefghijklmnopqrstuvwxyz";
const alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "01234567890";
const symbols = "'!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var charset = "";
var optionUpper = false;
var optionNumeric = false;
var optionSymbols = false;

// Password Generator function
function generatePassword() {
    // Next line clears any previous password generationi
    var pw = "";

    // Set the length of password
    var pwlength = window.prompt("How long does your password need to be? (8 - 128)");
    if (pwlength < 8 || pwlength > 128){
      window.alert("Passwords must contain between 8 to 128 characters! Please restart.");
      return;
    }
    if (!pwlength) {
      return;
    }

    // Prompts user a series of questions to pick a charset
    typeset1 = window.prompt("Does your password require Upper Case? (yes or no)")
    typeset1 = typeset1.toUpperCase();
    if (typeset1 !== "YES" && typeset1 !== "NO"){
      window.alert("Please enter either 'Yes' or 'No'");
      return
    } 
    else if (typeset1 == "YES") {
      optionUpper = true;}
    else if (typeset1 == "NO") {
      optionUpper = false;
      }
    else {return;
    }

    typeset2 = window.prompt("Does your password require Numbers? (yes or no)")
    typeset2 = typeset2.toUpperCase();
    if (typeset2 !== "YES" && typeset2 !== "NO"){
      window.alert("Please enter either 'Yes' or 'No'");
      return}
    else if (typeset2 == "YES") {
      optionNumeric = true;}
    else if (typeset2 == "NO") {
      optionNumeric = false;
    }
    else {return;
    }

    typeset3 = window.prompt("Does your password require Symbols? (yes or no)")
    typeset3 = typeset3.toUpperCase();
    if (typeset3 !== "YES" && typeset3 !== "NO"){
      window.alert("Please enter either 'Yes' or 'No'");
      return}
    else if (typeset3 == "YES") {
      optionSymbols = true;}
    else if (typeset2 == "NO") {
      optionSymbols = false;
    }
      else {return;
    } 
    //all true
    if (optionUpper === true && optionNumeric === true && optionSymbols === true){
      charset = alphaLow.concat(alphaUp,numeric,symbols)
    }
    // Two Trues
    else if (optionUpper === true && optionNumeric === true && optionSymbols === false){
      charset = alphaLow.concat(alphaUp,numeric)
    }
    else if (optionUpper === true && optionNumeric === false && optionSymbols === true){
      charset = alphaLow.concat(alphaUp,symbols)
    }
    else if (optionUpper === false && optionNumeric === true && optionSymbols === true){
      charset = alphaLow.concat(numeric,symbols)
    }
    // One True
    else if (optionUpper === true && optionNumeric === false && optionSymbols === false){
      charset = alphaLow.concat(alphaUp)
    }
    else if (optionUpper === false && optionNumeric === false && optionSymbols === true){
      charset = alphaLow.concat(symbols)
    }
    else if (optionUpper === false && optionNumeric === true && optionSymbols === false){
      charset = alphaLow.concat(numeric)}

    else {charset = alphaLow}

  // Generate a random password according to chosen charset and length
  for (var i = 0, n = charset.length; i < pwlength; ++i) {
    pw += charset.charAt(Math.floor(Math.random() * n));
  }
  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
