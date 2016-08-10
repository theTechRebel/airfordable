var express = require('express');
var router = express.Router();

var data = {title:'Express',
 											user:'Steven Dumbura',
 											express:'Express.JS'};
 											
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',data);
});

module.exports = router;
