var mongoose = require('mongoose');

var db = mongoose.model('passport', Schema);
console.log('Connect');
var db = new mongoose();
db.connect();
var newUser = new user({
    username:usernamesignup,
    email:emailsignup,
    password:passwordsignup,
    data:data

})
db.save(function(err, win) {
    if (err) return next(err)
    console.log(err)


    console.log('good');

});


