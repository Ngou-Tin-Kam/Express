//Dependencies
const { describe, it } = require("mocha");
const { expect } = require("chai");

//Passing test
describe("Maths tests", () => {
  it("should equal 2", () => {
    expect(1 + 1).to.equal(2);
  });

  //Failing test
  it("should not equal 2", () => {
    expect(1 + 1).to.equal(3);
  });
});
