//require express
var router = require('express').Router();
var models = require('../models');


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


