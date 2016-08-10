//require express
var express = require('express');
var sequelize = require('sequelize');
//creating a new router object
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	
  var drinks = [
        { name: 'Bloody Mary', drunkness: 10 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('index', {
        drinks: drinks,
        tagline: tagline
    });
});

module.exports = router;


