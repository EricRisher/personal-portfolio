let button = document.getElementById('btn');

let includeUpper   = confirm('Do you want upper case letters?');
let includeLower   = confirm("Do you want lower case letters?");
let includeNums    = confirm("Do you want numbers?");
let includeSpecial = confirm("Do you want special characters?");
let passwordLength = prompt( "Choose a password length between 8 and 128 characters.");
let passLength     = parseInt(passwordLength);

button.addEventListener('click', generatePassword);

if (passLength >= 1 && passLength <= 50) {
  function generatePass() {
    let passwordStr = '';
    let UPPERCASE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LOWERCASE_CHAR = "abcdefghijklmnopqrstuvwxyz";
    let NUMBER_CHAR = "0123456789";
    let SYMBOL_CHAR = "!@#$%^&*(){}[];':<>?|";

    if (includeUpper === true) {
      passwordStr += UPPERCASE_CHAR
    };
    if (includeLower === true) {
      passwordStr += LOWERCASE_CHAR
    };
    if (includeNums === true) {
      passwordStr += NUMBER_CHAR
    };
    if (includeSpecial === true) {
      passwordStr += SYMBOL_CHAR
    };

    let password = '';
    for (let i = 0; i < passLength; i++) {
      password += passwordStr.charAt(Math.floor(Math.random() * passwordStr.length));
    }
    return password;
  }
} else {
  alert("Password must be inbetween 8 and 128 characters!");
}

function generatePassword(){
            let password = generatePass();
            let passwordEl = document.getElementById("passwordDisplay");

            passwordEl.value = password;
        }