var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("My Websites", function() {


  this.timeout(30000);
 it("should send user to the get a quote", function(done) {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("https://www.mansfieldmarketing.com/")
      // Click the catalog link
      .click(".x-btn.green")
      // Evaluate the title
      .evaluate(function() {
        return document.title;
      })
      // Asset the title is as expected
      .then(function(title) {
        expect(title).to.equal("Get a Quote for Marketing Services from Mansfield Marketing");
        done();
      });
  });

  it("should find the first recipe link", function(done) {
    new Nightmare({ show: true })
      .goto("https://fierce-island-55952.herokuapp.com/")
      // Enter username.
      .type("#login-email-input", "test@test.com")
      // Enter password.
      .type("#login-password-input", "password")
      // Click the login button
      .click(".btn.signin-btn")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "first recipe" link can be found
        console.log(document.querySelector("a.recipeName"));
        return document.querySelector("a.recipeName");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      });
  });

  it("should submit a link and get the first ingred", function(done) {
    new Nightmare({ show: true })
      .goto("https://fierce-island-55952.herokuapp.com/")
      // Enter username.
      .type("#login-email-input", "test@test.com")
      // Enter password.
      .type("#login-password-input", "password")
      // Click the login button
      .click(".btn.signin-btn").then( function(){
        type("#recipe_url", "http://www.seriouseats.com/recipes/2017/06/ghana-west-african-peanut-stew-goat-tripe-groundnut-soup.html")
        .click("#submit-button")
        // Evaluate the following selector
        .evaluate(function() {
          // Assert the "first recipe" link can be found
          console.log(document.querySelector(".ingredientChecklist:first-of-type"));
          return document.querySelector(".ingredientChecklist:first-of-type");
        })
        .then(function(link) {
          expect(link).to.not.equal(undefined);
          done();
        });
      });
  });


/*
  it("should throw an error for fun", function() {
    throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
  });
  */
});