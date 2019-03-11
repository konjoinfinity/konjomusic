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

router.put("/:title", (req, res) => {
  Song.findOne({
    title: req.params.title
  }).then(song => {
    song.title = req.body.title;
    song.author = req.body.author;
    song.notes = req.body.notes;
    song.lyrics = req.body.lyrics;
    song.save(err => {
      if (err) return res.status(500).send(err);
      res.redirect(`/songs/${song.title}`);
    });
  });
});

router.delete("/:title", (req, res) => {
  Song.findOneAndRemove({ title: req.params.title }).then(konjo =>
    Song.find({}).then(song => res.json(song))
  );
});

module.exports = router;
