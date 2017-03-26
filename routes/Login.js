var express = require('express');
var mongoose= require('mongoose');

exports.get(function(res,req){
    res.render('login');
});
exports.post= function(req,res,next) {
    var db = mongoose.model('User', Schema);
    console.log('Connect');
    console.log(mongoose.version);
    schema.statics.authorize = function(username, password, callback) {
        var User = this;

        async.waterfall([
            function(callback) {
                User.findOne({username: username}, callback);
            },
            function(user, callback) {
                if (user) {
                    if (user.checkPassword(password)) {
                        callback(null, user);
                    } else {
                        callback(console.log("Пароль неверен"));
                    }
                }

            }
        ], callback);
    };


    next();
}