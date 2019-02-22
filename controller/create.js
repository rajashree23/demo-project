var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

    email: String,
    password: {type:String, unique:true},
    subscribers: {type:Array}

});

var userModel = mongoose.model('user',userSchema);
module.exports = userModel;
