var express = require('express');
var router = express.Router();
var session= require('express-session');
var mongoose=require('mongoose');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('were connected!')
});




/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Twitter' });

    db.save(function(err, win) {
        if (err) return next(err)
        console.log(err)


        console.log('good');

    });
    next();
});
router.get('/users',function(req,res,next){
    var users =mongoose.model('passport', Schema);
    Console.log(users);
})

router.get('/register',require('./register').get);
router.post('/register',require('./register').post)
;
router.get('/loginnnn', function(req,res){
	res.render('login');
    var users = mongoose.model('passport', Schema);
    var db = new mongoose();
    db.connect();

    var username = req.body.username;
    var password=req.body.password;
    User.findOne({username:username},function(err, users){
if (users){

   if( users.checkPassword(password)){}
    else{
       (err)
   }
}
    });
    router.get('users',function(req,res,next){
        user.find({},function(err,users){
            console.log(users);

;
        })
    });
});
module.exports = router;
