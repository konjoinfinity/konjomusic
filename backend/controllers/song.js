const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Song = require("../models/song");

router.get("/", function(req, res) {
  Song.find({})
    .sort({ votes: -1 })
    .then(song => res.json(song));
});

router.post("/", (req, res) => {
  Song.create(req.body).then(konjo => res.redirect("/songs"));
});

router.get("/:id", (req, res) => {
  Song.findOne({ _id: req.params.id }).then(song => res.json(song));
});

router.put("/:id", (req, res) => {
  console.log(req.params.id);
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
  Song.findOneAndDelete({ _id: req.params.id }).then(konjo =>
    res.json("/songs")
  );
});

router.put("/:id/comment", (req, res) => {
  const createComment = {
    text: req.body.comment
  };
  console.log(createComment);
  Song.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: createComment } }
  ).then(song => {
    song.save((err, song) => {
      res.json(song);
    });
  });
});

router.put("/:id/delete", (req, res) => {
  const deleteComment = { _id: req.body.body };
  console.log(deleteComment);
  Song.findOneAndUpdate(
    { _id: req.params.id },
    { $pull: { comments: deleteComment } }
  ).then(song => {
    song.save((err, song) => {
      res.json(song);
    });
  });
});

router.delete("/:id/clean", (req, res) => {
  // console.log(req.body);
  Song.findOneAndUpdate(
    { _id: req.params.id },
    { $pull: { comments: {} } }
  ).then(song => {
    song.save((err, song) => {
      res.json(song);
    });
  });
});

router.delete("/:id/poptop", (req, res) => {
  // console.log(req.body);
  Song.findOneAndUpdate(
    { _id: req.params.id },
    { $pop: { comments: -1 } }
  ).then(song => {
    song.save((err, song) => {
      res.json(song);
    });
  });
});

router.delete("/:id/popbottom", (req, res) => {
  // console.log(req.body);
  Song.findOneAndUpdate({ _id: req.params.id }, { $pop: { comments: 1 } }).then(
    song => {
      song.save((err, song) => {
        res.json(song);
      });
    }
  );
});

module.exports = router;