const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Song = new Schema({
  title: String,
  notes: String,
  lyrics: String,
  author: String
});

module.exports = mongoose.model("Song", Song);
