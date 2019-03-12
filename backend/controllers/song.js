const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Song = require("../models/song");

router.get("/", function(req, res) {
  Song.find({}).then(song => res.json(song));
});

router.post("/", (req, res) => {
  Song.create(req.body).then(konjo => res.redirect("/songs"));
});

router.get("/:id", (req, res) => {
  Song.findOne({ _id: req.params.id }).then(song => res.json(song));
});

router.put("/:id", (req, res) => {
  Song.findOne({
    _id: req.params.id
  }).then(song => {
    song.title = req.body.title;
    song.author = req.body.author;
    song.notes = req.body.notes;
    song.lyrics = req.body.lyrics;
    song.save((err, song) => {
      res.json(song);
    });
  });
});

router.delete("/:id", (req, res) => {
  Song.findOneAndRemove({ _id: req.params.id }).then(konjo =>
    res.redirect("/songs")
  );
});

module.exports = router;
