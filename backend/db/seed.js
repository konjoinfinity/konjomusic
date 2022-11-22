const mongoose = require("./connection");
const seeds = require("./seed.json");
const Song = require("../models/song");
const User = require("../models/User")

mongoose.Promise = Promise;

Song.remove({}).then(_ => {
  console.log("Deleted Songs");
  Song.collection.insertMany(seeds).then(seededEntries => {
    console.log(seededEntries);
    mongoose.connection.close();
  });
});

