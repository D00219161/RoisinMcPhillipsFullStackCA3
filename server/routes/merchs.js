const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Merch     = require('../models/Merch').Merch;

/**
 * Functionality for this route:
 *  C   POST    /Merch/       Create a new Merch
 *  R   GET     /Merch         Gets an array of all Merch
 *  R   GET     /Merch/:id     Get a single Merch, by ID
 *  U   PUT     /Merch/:id     Update a single Merch, by id
 *  D   DELETE  /Merch/:id     Delete a single Merch, by ID
 */

// GET an array of all Merch
router.get('/', (req, res) => {
    return mongoose
      .model('Merch')
      .find({})
      .then (merchs => res.json(merchs))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single Merch by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Merch')
    .findOne({_id: req.params.id})
    .then (merch => res.json(merch))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a Merch
router.post('/', (req, res) => {
  return new Merch({
    Name    : req.body.Name,
    Image   : req.body.Image,
    Description     : req.body.Description,
    Price     : req.body.Price
  })
  .save()
  .then (merch => Merch.populate(merch, {path: '_id'}))
  .then (merch => res.json(merch))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a Merch with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Merch
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a Merch
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Merch
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        Name    : req.body.Name,
        Image   : req.body.Image,
        Description     : req.body.Description,
        Price     : req.body.Price
      }},
      {new: true}
    )
    .then (merch => Merch.populate(merch, {path: '_id'}))
    .then (merch => res.json(merch))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;