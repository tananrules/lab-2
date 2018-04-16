var mongoURL = "mongodb://localhost:27017/lab2";
var mongo = require('./mongo');

function handle_signup(msg, callback) {

    var res = {};
    console.log("In signup.js - handle_signup :" + JSON.stringify(msg));

    mongo.connect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        var user = mongo.collection('user');
        user.findOne({username: msg.username}, function(err, user) {

            if(user) {
                res.status = 401;
                callback(null, res);
            }
            else if(msg.username === "" || msg.password === "" || msg.firstname === "" || msg.lastname === "") {
                res.status = 403;
                callback(null, res);
            }
            else {
                user.insert({username: msg.username, password: msg.password, firstname: msg.firstname, lastname: msg.lastname}, function (err, user) {
                    if(err) {
                        res.status = 500;
                        callback(null, res);
                    }
                    else {
                        res.status = 200;
                        callback(null, res);
                    }
                });
            }
        });
    });
}

exports.handle_signup = handle_signup;