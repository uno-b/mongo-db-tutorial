const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Saving records", function() {

    // Create tests
    it("Saves a record to the database", function(done) {
        
        let char = new MarioChar({
            name: "Mario"
        });

        // save is an asynchronous request
        char.save().then(function() {
            assert(char.isNew === false);
            done();
        }).catch(function(err) {
            console.log(err);
           });

    });

    // next test

});