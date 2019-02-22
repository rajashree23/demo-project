var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userModel1 = require('../controller/publisher');



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


module.exports = router;
