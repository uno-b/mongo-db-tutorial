const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Finding records", function() {

    let char;

    beforeEach(function(done) {
        char = new MarioChar({
            name: "Mario"
        });

        // save is an asynchronous request
        char.save().then(function() {
            done();
        });
    });

    // Create tests
    it("Finds one record from the database", function(done) {

       MarioChar.findOne({ name: "Mario" }).then(function(result) {
        assert(result.name === "Mario");
        done();
       }).catch(function(err) {
        console.log(err);
       }); 

    });

    it("Finds one record by ID from the database", function(done) {

       MarioChar.findOne({ _id: char._id }).then(function(result) {
        assert(result._id.toString() === char._id.toString());
        done();
       }).catch(function(err) {
        console.log(err);
       }); 

    });

});