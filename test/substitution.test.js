const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("Substitution", () => {
  it("Should return false if alphabet isn't exactly 26 characters long", () => {
    const alphabet = "abcdef";
    const expected = false;
    const actual = substitution("message", alphabet, true);
    expect(actual).to.equal(expected);
  });

  it("Should correctly translate the given phrase, based on the alphabet given to the function.", () => {
    const alphabet = "sjdzurnybhxpfaigwceklmoqtv";
    const expected = "fueesnu";
    const actual = substitution("message", alphabet, true);
    expect(actual).to.equal(expected);
  });

  it("Should return false if there are any duplicate characters in the given alphabet.", () => {
    const alphabet = "sjdzurnybhxpfaigwceklmoqtt";
    const expected = false;
    const actual = substitution("message", alphabet, true);
    expect(actual).to.equal(expected);
  });

  it("Should maintain spaces when encoding.", () => {
    const alphabet = "sjdzurnybhxpfaigwceklmoqtv";
    const expected = "s fueesnu";
    const actual = substitution("a message", alphabet, true);
    expect(actual).to.equal(expected);
  });

  it("Should maintain spaces when decoding.", () => {
    const alphabet = "sjdzurnybhxpfaigwceklmoqtv";
    const expected = "a message";
    const actual = substitution("s fueesnu", alphabet, false);
    expect(actual).to.equal(expected);
  });

  it("Should ignore capital letters.", () => {
    const alphabet = "sjdzurnybhxpfaigwceklmoqtv";
    const expected = "s fueesnu";
    const actual = substitution("A message", alphabet, true);
    expect(actual).to.equal(expected);
  });
});
