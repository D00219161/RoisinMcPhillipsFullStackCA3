const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const ActorSchema  = new mongoose.Schema({

    Name: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    DateOfBirth: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    Age: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    Nationality: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    Films: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    
  }, SchemeConfig);

  module.exports.Actor = mongoose.model('Actor', ActorSchema);