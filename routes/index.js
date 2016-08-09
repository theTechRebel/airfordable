//require express
var express = require('express');
//creating a new router object
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express JS' });
});

module.exports = router;
