var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel = require('../controller/create');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');


})


router.get('/subscriber', function(req, res, next) {
  res.render('subscriber');


})



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

module.exports = router;
