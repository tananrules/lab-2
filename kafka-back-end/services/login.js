exports.handle_request = handle_request;

var mongoURL = "mongodb://localhost:27017/lab2";
var mongo = require('./mongo');

function handle_login(msg, callback) {

    var res = {};
    console.log("In login.js - handle_login :" + JSON.stringify(msg));

    mongo.connect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        var myCollection = mongo.collection('user');

        user.findOne({username: msg.username, password: msg.password}, function (err, user) {
            if (user) {
                res.user = {
                    username = user.username;
                    password = user.password;
                    first_name = user.first_name;
                    lastname = user.last_name;
                    status = 201;
                    value = "Success Login";
                }
            } else {
                res.status = 401;
                res.value = "Failed Login";
            }
            callback(null, res);
        });
    });
}

exports.handle_login = handle_login;