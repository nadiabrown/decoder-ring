const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("Caesar", () => {
  it("Should return false if shift is equal to 0.", () => {
    const expected = false;
    const actual = caesar("A message", 0, true);
    expect(actual).to.equal(expected);
  });

  it("Should return false if shift is greater than 25.", () => {
    const expected = false;
    const actual = caesar("A message", 30, true);
    expect(actual).to.equal(expected);
  });

  it("Should return false if shift is less than -25.", () => {
    const expected = false;
    const actual = caesar("A message", -30, true);
    expect(actual).to.equal(expected);
  });

  it("Should return false if no shift value is provided", () => {
    const expected = false;
    const actual = caesar("A message");
    expect(actual).to.equal(expected);
  });

  it("Should ignore capital letters.", () => {
    const expected = "d phvvdjh.";
    const actual = caesar("A message.", 3, true);
    expect(actual).to.equal(expected);
  });

  it("Shifts that go past the end of the alphabet should loop around to the beginning.", () => {
    const expected = "cheud fdnhv";
    const actual = caesar("Zebra cakes", 3, true);
    expect(actual).to.equal(expected);
  });

  it("Spaces and nonalphabetic symbols should be maintained when encoding.", () => {
    const expected = "$groodu vljq.";
    const actual = caesar("$Dollar sign.", 3, true);
    expect(actual).to.equal(expected);
  });

  it("Spaces and nonalphabetic symbols should be maintained when decoding.", () => {
    const expected = "$dollar sign.";
    const actual = caesar("$groodu vljq.", 3, false);
    expect(actual).to.equal(expected);
  });
});
