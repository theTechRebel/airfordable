//require express
var express = require('express');
//creating a new router object
var router = express.Router();

/* GET home page. */
router
		.get('/', function(req, res, next) {
      res.render('index');
		})
		.get('/contact', function(req, res, next) {
      res.render('index');
		})
		.get('/about', function(req, res, next) {
      res.render('index');
		})
		.get('/blog', function(req, res, next) {
      res.render('index');
		});

module.exports = router;


