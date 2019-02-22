var mongoose = require('mongoose');
var userModel = require('user');
var express = require('express');
var router = express.Router();

router.post('/login', function(req, res){
    // new code should come over here
    userModel.findOne({email: req.body.email, password: req.body.password}, function(err, user){
        if(err) {
            console.log(err);
        }
        else if(user){
            res.redirect('/subscriber');
        }
        else {
            console.log('Invalid');
        }
    });

});
