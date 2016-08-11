//require express
var express = require('express');
var sequelize = require('sequelize');
//creating a new router object
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;


