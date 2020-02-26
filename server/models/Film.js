const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const FilmSchema  = new mongoose.Schema({

    Title: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
   
    Year: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    Genre: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    Director: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    Starring: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    
  }, SchemeConfig);

  module.exports.Film = mongoose.model('Film', FilmSchema);