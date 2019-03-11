const mongoose = require("./connection");
const seeds = require("./seed.json");
const Gif = require("../models/song");

mongoose.Promise = Promise;

Song.remove({}).then(_ => {
  console.log("Dropped the DB");
  Song.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries);
    mongoose.connection.close();
  });
});
