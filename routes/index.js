'use strict';
var express = require('express');
var router = express.Router();
var session = require('express-session');

var userModel1 = require('../models/publisher');
var userModel2 = require('../models/subscriber');

var express = require('express');
var router = express.Router();
const fs = require('fs');
const moment = require('moment');
const mdq = require('mongo-date-query');
const json2csv = require('json2csv').parse;
const path = require('path')
const fields = ['email','password'];


//var userModel1 = require('../controller/');



/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user)
  {
    if(req.session.type=="publisher")
     res.redirect('/publisher')
     else {
       res.redirect('/subscriber')
     }
  }
  else
    res.render('index');
})

router.get('/publisher', function(req, res, next) {
  if (req.session.user) {
   res.render('publisher', {
   'user': req.session.user
        });
  }
else {
    res.redirect('/')
     }
})

router.get('/subscriber', function(req, res, next) {
  if (req.session.user) {
    userModel1.find({}, 'email', function(err,docs){
      if(!err){
        console.log(docs);
        res.render('subscriber',{
           'user': req.session.user,
            'email':docs
         });
       }
     });
      }


else {
    res.redirect('/')
     }



})

router.get('/subscribe/:email',function(req,res,next){
  var email = req.params.email;
  console.log(email);
  console.log("this");
  console.log(req.session.user.email);
  userModel1.findOneAndUpdate({'email':email},
  {$push: {mysubscriber:req.session.user.email}},
  function(err,raw){
    console.log(raw);
     res.redirect('/subscriber');
  })
})

router.get('/unsubscribe/:email',function(req,res,next){
  var email = req.params.email;

  console.log(req.session.user.email);
  userModel1.findOneAndUpdate({'email':email},
  {$pull: {"mysubscriber":req.session.user.email}},
  function(err,raw){
    console.log(raw);
     res.redirect('/subscriber');
  })
})

router.post('/login',function(req,res,next){
  var email = req.body.email;

  userModel2.find({'email':email},function(err,user){
    console.log(err);

     if(user.length ==1){
       console.log('subscriber');
       if(user[0].password==req.body.pass){

        req.session.user=user[0];
        req.session.type="subscriber";


       res.redirect('/subscriber');

     }
       else {
         res.send("invald password")
       }
     }
     else{
       userModel1.find({'email' :email},function(err,user){
          if(user.length==1){

            if(user[0].password==req.body.pass){

            req.session.user=user[0];
              req.session.type="publisher";

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


router.get('/click', function (req, res) {
  userModel2.find({}, function (err, user1) {
    if (err) {
      return res.status(500).json({ err });
    }
    else {
      let csv
      try {
        csv = json2csv(user1, { fields });
      } catch (err) {
        return res.status(500).json({ err });
      }
      const dateTime = moment().format('YYYYMMDDhhmmss');
      const filePath = path.join(__dirname, "..", "public", "exports", "csv-" + dateTime + ".csv")
      fs.writeFile(filePath, csv, function (err) {
        if (err) {
          return res.json(err).status(500);
        }
        else {

          return res.json("/exports/csv-" + dateTime + ".csv");
        }
      });

    }
  })
})



module.exports = router;
