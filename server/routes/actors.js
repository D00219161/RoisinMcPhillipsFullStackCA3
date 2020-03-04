const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Actor     = require('../models/Actor').Actor;

/**
 * Functionality for this route:
 *  C   POST    /Actors/       Create a new Actor
 *  R   GET     /Actors         Gets an array of all Actors
 *  R   GET     /Actors/:id     Get a single Actor, by ID
 *  U   PUT     /Actors/:id     Update a single Actor, by id
 *  D   DELETE  /Actors/:id     Delete a single Actor, by ID
 */

// GET an array of all Actors
router.get('/', (req, res) => {
    return mongoose
      .model('Actor')
      .find({})
      .then (actors => res.json(actors))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single Actor by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Actor')
    .findOne({_id: req.params.id})
    .then (actor => res.json(actor))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new Actor
router.post('/', (req, res) => {
  return new Actor({
    Name    : req.body.Name,
    Image   : req.body.Image,
    DOB     : req.body.DOB,
    Age     : req.body.Age,
    Nationality    : req.body.Nationality,
    Films   : req.body.Films
  })
  .save()
  .then (actor => Actor.populate(actor, {path: '_id'}))
  .then (actor => res.json(actor))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a Actor with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Actor
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a Actor
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Actor
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        Name    : req.body.Name,
        Image   : req.body.Image,
        DOB     : req.body.DOB,
        Age     : req.body.Age,
        Nationality    : req.body.Nationality,
        Films   : req.body.Films
      }},
      {new: true}
    )
    .then (actor => Actor.populate(actor, {path: '_id'}))
    .then (actor => res.json(actor))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;