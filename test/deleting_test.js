const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Deleting records", function () {
  let char;

  beforeEach(function (done) {
    char = new MarioChar({
      name: "Mario",
    });

    // save is an asynchronous request
    char.save().then(function () {
      done();
    });
  });

  // Create tests
  it("Deletes one record from the database", function (done) {
    MarioChar.findOneAndRemove({ name: "Mario" }).then(function () {
      MarioChar.findOne({ name: "Mario" }).then(function (result) {
        assert(result === null);
        done();
      });
    });
  });
});
