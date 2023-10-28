const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // If shift is 0, greater than 25, or less than -25, or nonexistent, false is returned.
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    // Sets alphabet variable and result variable.
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    // If we are turning normal text into a code...
    if (encode === true) {
      // turns input to all lowercase.
      let inputLowerCase = input.toLowerCase();
      // Loops through input string.
      for (let i = 0; i < inputLowerCase.length; i++) {
        let newLetter;
        // If current index does not contain a letter from alphabet, just add the current index to result
        if (!alphabet.includes(inputLowerCase[i])) {
          result += inputLowerCase[i];
        }
        // Creates variable new index and sets it to the index of the current letter within alphabet. Then, adds shift.
        else {
          let newIndex = alphabet.indexOf(inputLowerCase[i]) + shift;
          // If newIndex is greater than or equal to alphabet length, subtract alphabet length from newIndex.
          if (newIndex >= alphabet.length) {
            newIndex -= alphabet.length;
          }
          // If newIndex is less than zero, add alphabet length to newIndex.
          else if (newIndex < 0) {
            newIndex += alphabet.length;
          }
          // Set newLetter to new letter and add new letter to result.
          newLetter = alphabet[newIndex];
          result += newLetter;
        }
      }
    }

    if (encode === false) {
      let inputLowerCase = input.toLowerCase();
      for (let i = 0; i < inputLowerCase.length; i++) {
        let newLetter;
        if (!alphabet.includes(inputLowerCase[i])) {
          result += inputLowerCase[i];
        } else {
          // Same as the first if statement with encode === true, except we are subtracting shift.
          let newIndex = alphabet.indexOf(inputLowerCase[i]) - shift;
          if (newIndex >= alphabet.length) {
            newIndex -= alphabet.length;
          } else if (newIndex < 0) {
            newIndex += alphabet.length;
          }
          newLetter = alphabet[newIndex];
          result += newLetter;
        }
      }
    }
    return result;
  }

  // DON'T CHANGE ANY CODE BELOW!!!!
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
