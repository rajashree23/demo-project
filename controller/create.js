let mongoose = require('mongoose')
let validator = require('validator')

let emailSchema = new mongoose.Schema({
  email: {
    type: String
  },

  password: {type: String}
});

module.exports = mongoose.model('Email', emailSchema)
