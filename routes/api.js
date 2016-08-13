var api = require('express').Router();
var models = require('../models');

/* API for getting all posts */
api.get('/posts/', function(req, res, next) {
    models.Posts.findAll().then(function(posts) {
      res.json({posts:posts});
    });
});

module.exports = api;