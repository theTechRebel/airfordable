var api = require('express').Router();
//require the db Post object
var Post = require('../models/post');

/* API for getting all posts */
api.get('/posts/', function(req, res, next) {
    Post.findAll().then(function(posts) {
      res.json({posts:posts});
    });
});

module.exports = api;