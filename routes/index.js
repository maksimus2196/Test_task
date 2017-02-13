var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.use(express.static(path.join('public', 'test.html')));
next();
});

module.exports = router;
