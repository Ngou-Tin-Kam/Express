// Dependencies
const { describe, it } = require("mocha");
const { expect } = require("chai");

// Main
// Reverse Factorial
const factorial = (bigNum) => {
  let divider = 2;
  let result = bigNum;

  if (result % divider !== 0) {
    return `${bigNum} is not a factorial.`;
  }

  while (result % divider === 0) {
    result /= divider;
    divider++;
  }

  return divider - 1;
};

// Tests

describe("Factorial Tests", () => {
  it.skip("Should equal 4", () => {
    expect(factorial(24)).to.equal(4);
  });

  it.skip("Should return a warning", () => {
    expect(factorial(9)).to.equal("9 is not a factorial.");
  });
});
