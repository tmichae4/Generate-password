var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
  var upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
  
  // this is asking questions for your password to be generated
  function getPasswordOptions() {
    var length = parseInt(
      prompt("How many characters would you like your password to contain?")
    );
    // NaN (not a number) //
    if (isNaN(length) === true) {
      alert("Password length must be provided as a number");
      return;
    }
    if (length < 8) {
      alert("Password length must be at least 8 characters");
      return;
    }
  
    // checking to see if password is 128 long, it end if this is false
    if (length > 128) {
      alert("Password length must less than 129 characters");
      return;
    }
  
    // adding special characters
    var hasSpecialCharacters = confirm(
      "Click OK to confirm including special characters."
    );

    // adding numbers
    var hasNumericCharacters = confirm(
      "Click OK to confirm including numeric characters."
    );

    //adding lower case
    var hasLowerCasedCharacters = confirm(
      "Click OK to confirm including lowercase characters."
    );
  
    // adding uppercase
    var hasUpperCasedCharacters = confirm(
      "Click OK to confirm including uppercase characters."
    );
  
    // checks if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if (
      hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false
    ) {
      alert("Must select at least one character type");
      return;
    }
  
    // putting the options of the usesr
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters,
    };
    return passwordOptions;
  }
  // getting a random element from an array //
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }
  // generate password with user input //
  function generatePassword() {
    var options = getPasswordOptions();
    // Variable to store password 
    var result = [];
    // Array to store types of characters to include in password //
    var possibleCharacters = [];
    // Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];
    // adds array of special characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
    //  adds array of numeric characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
    }
    // array of lowercase characters into array of possible characters based on user input
    // Push new random lower-cased character to guaranteedCharacters
    if (options.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
    // adds array of uppercase characters into array of possible characters based on user input
    // Push new random upper-cased character to guaranteedCharacters
    if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
    // For loop (i++) to iterate over the password length from the options object, selecting random indices from the array of possible characters and combining those characters into the result variable
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
      result.push(possibleCharacter);
    }
  
    // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
    // Transform the result into a string and pass into writePassword
    return result.join("");
  }
  
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
  
  