var express = require('express');
var router = express.Router();
var session = require('express-session');

var userModel1 = require('../models/publisher');
var userModel2 = require('../models/subscriber');


//var userModel1 = require('../controller/login');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');


})

router.get('/publisher', function(req, res, next) {
  if (req.session.user) {
   res.render('publisher', {
   'user': req.session.user
        });
  }
else {
    res.redirect('/login')
     }
})

router.get('/subscriber', function(req, res, next) {
  if (req.session.user) {
   res.render('subscriber', {
   'user': req.session.user
        });
  }
else {
    res.redirect('/login')
     }


})

router.post('/login',function(req,res,next){
  var email = req.body.email;

  userModel2.find({'email':email},function(err,user){
    console.log(err);
    console.log(user);
     if(user.length ==1){
       console.log('subscriber');
       if(user[0].password==req.body.pass){
        console.log(user);

        req.session.user=user[0];
        console.log(req.session.user);

       res.redirect('/subscriber');

     }
       else {
         res.send("invald password")
       }
     }
     else{
       userModel1.find({'email' :email},function(err,user){
          if(user.length==1){
            console.log('publisher');
            if(user[0].password==req.body.pass){
            console.log('publisher');

            req.session.user=user[0];
              console.log(req.session);
               res.redirect('/publisher');



          }
            else{
              console.log(user[0].pass);
              console.log(req.body.pass);
              res.send("invalid password")
            }
          }

          else{
            console.log("Invalid email");
            res.send("Invalid user");
          }


   });
 }
});
});
router.get('/logout', function(req, res) {
    req.session.user = null;
    console.log(req.session);
    res.render('index')
      console.log('logged out');

});
module.exports = router;
