const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Item     = require('../models/Item').Item;

/**
 * Functionality for this route:
 *  C   POST    /Items/        Create a new Item
 *  R   GET     /Items         Gets an array of all Items
 *  R   GET     /Items/:id     Get a single Item, by ID
 *  U   PUT     /Items/:id     Update a single Item, by id
 *  D   DELETE  /Items/:id     Delete a single v, by ID
 */

// GET an array of all Items
router.get('/', (req, res) => {
    return mongoose
      .model('Item')
      .find({})
      .then (items => res.json(items))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single Item by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Item')
    .findOne({_id: req.params.id})
    .then (item => res.json(item))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new Item
router.post('/', (req, res) => {
  return new Item({
    Name : req.body.Name,
    Image : req.body.Image,
    Price : req.body.Price
  })
  .save()
  .then (item => Item.populate(item, {path: '_id'}))
  .then (item => res.json(item))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a Item with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Item
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a Item
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Item
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        Name : req.body.Name,
        Image : req.body.Image,
        Price : req.body.Price
      }},
      {new: true}
    )
    .then (item => Item.populate(item, {path: '_id'}))
    .then (item => res.json(item))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;