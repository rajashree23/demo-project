/*var mongoose = require('mongoose');
var userModel1 = require('../models/publisher');
var userModel2 = require('../models/subscriber');

var login = function(req, res) {
    userModel1.find({
        email: req.body.email
        console.log(email);
    }, function(err, user) {
        if (err) throw err;
        if (user) {
            res.redirect('/publisher');
          }
            else{
                   userModel2.find({
                     email:req.body.email},function(err,user){
                        if(err)throw err;
                        if (user) {
                          res.redirect('/subscriber');
                        }
                        else {
                          return res.render('login',{"msg":"Wrong email or password, Please try again..!!"});
                        }

                   })
            }
})

                req.session.user = details;

//
// var issue = function(req, res) {
//     issueModel.find({}, function(err, docs) {
//         if (!err) {
//             console.log(docs);
//         } else {
//             throw err;
//         }
//         res.render('admin', {
//             users: docs
//         });
//     });
// };

module.exports = {
    "login": login,
}*/
