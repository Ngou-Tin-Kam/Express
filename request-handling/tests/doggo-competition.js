//Dependencies
const { describe, it } = require("mocha");
const { expect } = require("chai");

//Main
//Doggo Competition
const calcPlaces = (maxNum) => {
  let places = [];

  for (let i = 1; i <= maxNum; i++) {
    const lastDigit = String(i).slice(-1);
    const lastTwo = String(i).slice(-2);

    if (lastDigit === "1" && lastTwo !== "11") {
      places.push(`${i}st`);
      continue;
    }

    if (lastDigit === "2" && lastTwo !== "12") {
      places.push(`${i}nd`);
      continue;
    }

    if (lastDigit === "3" && lastTwo !== "13") {
      places.push(`${i}rd`);
      continue;
    }

    places.push(`${i}th`);
  }

  // console.log(places);
  return places;
};

//Tests
describe("Places Tests", () => {
  it("Should have a length of 100", () => {
    expect(calcPlaces(100).length).to.equal(100);
  });
});