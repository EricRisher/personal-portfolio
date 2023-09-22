let button = document.getElementById('btn');
button.addEventListener("click", generatePassword);


  function generatePass() {
    let passwordStr = '';
    let UPPERCASE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LOWERCASE_CHAR = "abcdefghijklmnopqrstuvwxyz";
    let NUMBER_CHAR = "0123456789";
    let SYMBOL_CHAR = "!@#$%^&*(){}[];':<>?|";
    let includeUpper = confirm("Do you want upper case letters?");
    let includeLower = confirm("Do you want lower case letters?");
    let includeNums = confirm("Do you want numbers?");
    let includeSpecial = confirm("Do you want special characters?");
    let passwordLength = prompt("Choose a password length");
let passLength = parseInt(passwordLength);

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

function generatePassword(){
            let password = generatePass();
            let passwordEl = document.getElementById("passwordDisplay");

            passwordEl.value = password;
}