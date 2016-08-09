var express = require('express');
var router = express.Router();

var data = {title:'Express',
 											user:'Steve',
 											express:'Express.JS'}
 											
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',data);
});

module.exports = router;
