const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const ItemSchema  = new mongoose.Schema({

    Name: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },

    Image:{
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

  module.exports.Item = mongoose.model('Item', ItemSchema);