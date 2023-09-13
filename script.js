var generateBtn = document.querySelector("#generate");

const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeSpecialCharsElement = document.getElementById(
  "includeSpecialChars"
);
const includeNumbersElement = document.getElementById("includeNumbers");
const includeLowercaseElement = document.getElementById("includeLowercase");
const includeUppercaseElement = document.getElementById("includeUppercase");

const form = document.getElementById("passwordGeneratorForm");
const passwordDisplay = document.getElementById("password");
const button = document.getElementById("generate");

//Arrays for types instead of a,b,c list
const UPPERCASE_CHAR = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeSpecialChars = includeSpecialCharsElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeLowercase = includeLowercaseElement.checked;
  const includeUppercase = includeUppercaseElement.checked;

  const password = generatePassword(
    characterAmount,
    includeSpecialChars,
    includeNumbers,
    includeLowercase,
    includeUppercase
  );
  passwordDisplay.innerText = genPass;
});

function generatePassword(
  characterAmount,
  includeSpecialChars,
  includeNumbers,
  includeLowercase,
  includeUppercase
) {
  let charCodes = undefined;
  if (includeSpecialChars) characters = character.concat(specialChars);
  if (includeNumbers) characters = character.concat(numberChars);
  if (includeLowercase) characters = character.concat(lowerCaseChars);
  if (includeUppercase) characters = character.concat(upperCaseChars);

  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
button.addEventListener("click", generatePassword);
