var mongoURL = "mongodb://localhost:27017/lab2";
var mongo = require('./mongo');

function handle_getFiles(msg, callback) {

    var res = {};
    console.log("In getFiles.js - handle_getFiles :" + JSON.stringify(msg));

    mongo.connect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        var filesCollection = mongo.collection('filesCollection');

        console.log("In getFiles.js - Username is : " + msg);

        filesCollection.find({username: msg}).toArray(function (err, file) {
            if (file) {
                callback(null, file);
            } else {
                console.log("Failed to fetch");
                callback(err, null);
            }
        });
    });
}

exports.handle_getFiles = handle_getFiles;