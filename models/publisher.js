var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

    email: {type:String,required:true,unique:true},
    password: {type:String, unique:true},
    mysubscriber:[{ email: String, name: String }]



});

var userModel1 = mongoose.model('users',userSchema);
module.exports = userModel1;
