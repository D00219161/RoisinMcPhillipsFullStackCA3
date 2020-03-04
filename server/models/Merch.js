const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const MerchSchema  = new mongoose.Schema({

    Name: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    Image: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    Description: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    Price: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    }
    
  }, SchemeConfig);

  module.exports.Merch = mongoose.model('Merch', MerchSchema);