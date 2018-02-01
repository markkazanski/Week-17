var multiply = require("../src/multiply.js");
var expect = require("chai").expect;

describe("Multiply", function() {
  it("should return the product of x and y when x and y are numbers", function() {
      console.log(multiply(2, 4));
    expect(multiply(2, 4)).to.equal(8);
  });

  it("should throw when either argument is not a number", function() {
    expect(function() {
      multiply(2, "4");
    }).to.throw(Error);
  });

  it("should throw when either argument is not a number", function() {
    expect(function() {
      multiply("asdfas", 4);
    }).to.throw(Error);
  });

  it("should return the product of x and y when x and y are numbers", function() {
    console.log(multiply(5.555, 6.666));
  expect(multiply(5.555, 6.666)).to.equal(37.02963);
  });

  it("should return the product of x and y when x and y are numbers", function() {
    console.log(multiply(0, -1));
  expect(multiply(0, -1)).to.equal(0);
  });
});
