const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // returns false if there is no alphabet or length of alphabet is not 26.
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputLowerCase = input.toLowerCase();
    if (!alphabet || alphabet.length != 26) {
      return false;
    }

    // tests for duplicates in alphabet.
    let duplicate = false;
    duplicate = alphabet.split("").some((element, index) => {
      return alphabet.indexOf(element) !== index;
    });

    // if there are duplicates in alphabet, return false.
    if (duplicate === true) {
      return false;
    }

    // encodes
    if (encode === true) {
      let codedInput = "";

      // loops through inputLowerCase
      for (let i = 0; i < inputLowerCase.length; i++) {
        // excludes spaces.
        if (inputLowerCase[i] === " ") {
          codedInput += " ";
          i++;
        }

        // sets currentStandardAlphabetLetterIndex to index of current letter in standard alphabet
        let currentStandardAlphabetLetterIndex = standardAlphabet.indexOf(
          inputLowerCase[i]
        );

        // adds letter from code alphabet to codedInput variable.
        codedInput += alphabet[currentStandardAlphabetLetterIndex];
      }
      return codedInput;
    }

    // decodes
    if (encode === false) {
      let decodedInput = "";

      // loops through inputLowerCase
      for (let i = 0; i < inputLowerCase.length; i++) {
        // excludes spaces
        if (inputLowerCase[i] === " ") {
          decodedInput += " ";
          i++;
        }

        // sets currentCodeAlphabetLetterIndex to index of current letter in coded alphabet.
        let currentCodeAlphabetLetterIndex = alphabet.indexOf(
          inputLowerCase[i]
        );

        // adds letter from standard alphabet to decodedInput variable.
        decodedInput += standardAlphabet[currentCodeAlphabetLetterIndex];
      }
      return decodedInput;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
