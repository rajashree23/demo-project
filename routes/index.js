var express = require('express');
var router = express.Router();


var userModel1 = require('../models/publisher');
var userModel2 = require('../models/subscriber');


//var userModel1 = require('../controller/login');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');


})

router.get('/publisher', function(req, res, next) {
  res.render('publisher');
})

router.get('/subscriber', function(req, res, next) {
  res.render('subscriber');


})

router.post('/login',function(req,res,next){
  var email = req.body.email;
  if(userModel1.find({'email':email}))
  {
    res.redirect('/publisher');
  }
  else if (userModel2.find({'email':email}))
    {
      res.redirect('/subscriber');
    }


    else {
      console.log("invalid");
    }


});


module.exports = router;
