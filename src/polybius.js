const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polybiusSquareRowOne = "abcde";
    const polybiusSquareRowTwo = "fghijk";
    const polybiusSquareRowThree = "lmnop";
    const polybiusSquareRowFour = "qrstu";
    const polybiusSquareRowFive = "vwxyz";
    // encoding
    if (encode === true) {
      // changes input to lowercase and creates a variable to hold result.
      const inputLowerCase = input.toLowerCase();
      let codedMessage = "";

      // loops through input.
      for (let i = 0; i < inputLowerCase.length; i++) {
        let currentLetter = inputLowerCase[i];
        let row;
        let currentNum = "";

        //excludes spaces.
        if (currentLetter === " ") {
          codedMessage += currentLetter;
        }
        // if letter equals i or j, add 42 to codedMessage.
        else if (currentLetter === "i" || currentLetter === "j") {
          codedMessage += "42";
        }

        // if polybius square row includes current letter, adds the coordinates of letter to codedMessage.
        else if (polybiusSquareRowOne.includes(currentLetter)) {
          row = "1";
          currentNum = polybiusSquareRowOne.indexOf(currentLetter) + 1;
          codedMessage += currentNum + row;
        } else if (polybiusSquareRowTwo.includes(currentLetter)) {
          row = "2";
          currentNum = polybiusSquareRowTwo.indexOf(currentLetter) + 1;
          codedMessage += currentNum + row;
        } else if (polybiusSquareRowThree.includes(currentLetter)) {
          row = "3";
          currentNum = polybiusSquareRowThree.indexOf(currentLetter) + 1;
          codedMessage += currentNum + row;
        } else if (polybiusSquareRowFour.includes(currentLetter)) {
          row = "4";
          currentNum = polybiusSquareRowFour.indexOf(currentLetter) + 1;
          codedMessage += currentNum + row;
        } else if (polybiusSquareRowFive.includes(currentLetter)) {
          row = "5";
          currentNum = polybiusSquareRowFive.indexOf(currentLetter) + 1;
          codedMessage += currentNum + row;
        }
      }
      return codedMessage;
    }

    // decoding
    if (encode === false) {
      // sets variable to hold decoded message.
      let decodedMessage = "";

      // excludes spaces
      const inputNoSpaces = input.replace(/ /g, "");

      // checks if number is
      if (inputNoSpaces.length % 2 != 0) {
        return false;
      }
      // loops through input
      for (let i = 0; i < input.length; i += 2) {
        // sets currentNum and nextNum variables.
        let currentNum = input[i];
        let nextNum = Number(input[i + 1]);

        // ignores spaces.
        if (currentNum === " ") {
          decodedMessage += " ";
          i--;

          // if currentNum === 4 and nextNum ===2, add (i/j) to decoded message.
        } else if (currentNum === "4" && nextNum === 2) {
          decodedMessage += "(i/j)";
        }

        // gets the row of nextNum and then the index. Adds the letter to decodedMessage variable.
        else if (nextNum === 1) {
          decodedMessage += polybiusSquareRowOne[currentNum - 1];
        } else if (nextNum === 2) {
          decodedMessage += polybiusSquareRowTwo[currentNum - 1];
        } else if (nextNum === 3) {
          decodedMessage += polybiusSquareRowThree[currentNum - 1];
        } else if (nextNum === 4) {
          decodedMessage += polybiusSquareRowFour[currentNum - 1];
        } else if (nextNum === 5) {
          decodedMessage += polybiusSquareRowFive[currentNum - 1];
        }
      }
      return decodedMessage;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
