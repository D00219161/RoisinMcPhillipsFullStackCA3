const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Director     = require('../models/Director').Director;

/**
 * Functionality for this route:
 *  C   POST    /Directors/       Create a new Director
 *  R   GET     /Directors         Gets an array of all Directors
 *  R   GET     /Directors/:id     Get a single Director, by ID
 *  U   PUT     /Directors/:id     Update a single Director, by id
 *  D   DELETE  /Directors/:id     Delete a single Director, by ID
 */

// GET an array of all Directors
router.get('/', (req, res) => {
    return mongoose
      .model('Director')
      .find({})
      .then (directors => res.json(directors))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single Director by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Director')
    .findOne({_id: req.params.id})
    .then (director => res.json(director))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new Director
router.post('/', (req, res) => {
  return new Director({
    Name    : req.body.Name,
    Image   : req.body.Image,
    DOB     : req.body.DOB,
    Age     : req.body.Age,
    Nationality    : req.body.Nationality,
    Genres    : req.body.Genres,
    Films     : req.body.Films
  })
  .save()
  .then (director => Director.populate(director, {path: '_id'}))
  .then (director => res.json(director))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a Director with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Director
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a Director
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Director
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        Name    : req.body.Name,
        Image   : req.body.Image,
        DOB     : req.body.DOB,
        Age     : req.body.Age,
        Nationality    : req.body.Nationality,
        Genres    : req.body.Genres,
        Films     : req.body.Films
      }},
      {new: true}
    )
    .then (director => Director.populate(director, {path: '_id'}))
    .then (director => res.json(director))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;