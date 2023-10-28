const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("Polybius", () => {
  it("When encoding, letters i and j should translate to 42", () => {
    const expected = "424222221351";
    const actual = polybius("Jiggle", true);
    expect(actual).to.equal(expected);
  });

  it("When decoding, should translate 42 to (i/j)", () => {
    const expected = "(i/j)(i/j)ggle";
    const actual = polybius("424222221351", false);
    expect(actual).to.equal(expected);
  });

  it("Should ignore capital letters", () => {
    const expected = "11 23513434112251";
    const actual = polybius("A message", true);
    expect(actual).to.equal(expected);
  });

  it("Should ignore spaces when encoding", () => {
    const expected = "11 23513434112251";
    const actual = polybius("A message", true);
    expect(actual).to.equal(expected);
  });

  it("Should ignore spaces when decoding", () => {
    const expected = "a message";
    const actual = polybius("11 23513434112251", false);
    expect(actual).to.equal(expected);
  });
});
