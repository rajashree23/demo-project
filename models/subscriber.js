var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

   name: {type:String,required:true},
   email: {type:String,required:true,unique:true},
   password: {type:String, unique:true},



});

var userModel2 = mongoose.model('user1',userSchema);
module.exports = userModel2;
