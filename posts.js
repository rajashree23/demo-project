var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var data;

var findSubs = function (db, callback) {
    var cursor = db.collection('user1').find().limit(10);

    cursor.each(function (err, doc) {

        if (doc != null) {
            console.dir(doc);

        } else {
            callback();
        }
    });
};

MongoClient.connect(url, function (err, db) {

    findSubs(db, function () {
        db.close();
    });
});
