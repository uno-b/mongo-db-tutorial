const mongoose = require("mongoose");

// ES6 Promise
mongoose.Promise = global.Promise;

// Connect to the database before tests run
before(function (done) {
  // Connect to mongodb
  mongoose.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  // on/once are used for listening to an event
  mongoose.connection
    .once("open", function () {
      console.log("Connection has been made.");
      done();
    })
    .on("error", function (error) {
      console.log("Connection error.", error);
    });
});

// Drop the characters collection before each test
beforeEach(function (done) {
  // Drop the collection
  mongoose.connection.collections.mariochars.drop(function () {
    done();
  });
});
