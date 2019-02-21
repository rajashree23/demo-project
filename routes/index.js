var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');


});

router.post('/login', function(req, res) {

        res.redirect('index');

});
module.exports = router;
