const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  text: String
});

const Song = new Schema({
  title: String,
  author: String,
  notes: String,
  lyrics: String,
  comments: [Comment]
});

module.exports = mongoose.model("Song", Song);
