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

router.put("/:id", (req, res) => {
  Song.findOneAndUpdate({ _id: req.params.id }, req.body).then(konjo =>
    Song.find({}).then(song => res.json(song))
  );
});

router.delete("/:id", (req, res) => {
  Song.findOneAndRemove({ _id: req.params.id }).then(konjo =>
    Song.find({}).then(song => res.json(song))
  );
});

module.exports = router;
