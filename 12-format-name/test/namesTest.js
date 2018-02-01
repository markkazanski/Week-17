var nameFormat = require("../src/nameFormat");
var expect = require("chai").expect;

describe("nameFormat", function() {
    it("should convert array to list of names", function() {
        expect(nameFormat(['Pushkin'])).to.equal('Pushkin');
    });

    it("should convert array to list of names", function() {
        expect(nameFormat(['Pushkin', 'Gogol'])).to.equal('Pushkin & Gogol');
    });

    it("should convert array to list of names", function() {
        expect(nameFormat(['Pushkin', 'Gogol', 'Zamyatin'])).to.equal('Pushkin, Gogol & Zamyatin');
    });
});