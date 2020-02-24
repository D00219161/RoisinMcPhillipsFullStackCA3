const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Film     = require('../models/Film').Film;

/**
 * Functionality for this route:
 *  C   POST    /Films/        Create a new Film
 *  R   GET     /Films         Gets an array of all Films
 *  R   GET     /Films/:id     Get a single Film, by ID
 *  U   PUT     /Films/:id     Update a single Film, by id
 *  D   DELETE  /Films/:id     Delete a single Film, by ID
 */

// GET an array of all Films
router.get('/', (req, res) => {
    return mongoose
      .model('Film')
      .find({})
      .then (films => res.json(films))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single Film by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Film')
    .findOne({_id: req.params.id})
    .then (film => res.json(film))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new Film
router.post('/', (req, res) => {
  return new Film({
    Title  : req.body.Title,
    Year   : req.body.Year,
    Genre  : req.body.Genre,
    Director : req.body.Director,
    Starring : req.body.Starring
  })
  .save()
  .then (film => Film.populate(film, {path: '_id'}))
  .then (film => res.json(film))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a Film with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Film
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a Film
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Film
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        Title  : req.body.Title,
        Year   : req.body.Year,
        Genre  : req.body.Genre,
        Director : req.body.Director,
        Starring : req.body.Starring
      }},
      {new: true}
    )
    .then (film => Film.populate(film, {path: '_id'}))
    .then (film => res.json(film))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;