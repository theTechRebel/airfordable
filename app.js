// 
// running app using express
// set DEBUG=myapp:* & npm start
// 
//require express
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//require index.js
var index = require('./routes/index');

//require Sequelize ORM
var orm = require('./models/sequelize');

//test the connection
orm
  .authenticate()
  .then(function(err) {
    console.log('mysql:true');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

//create an instance of express & call it app
var app = express();

// view engine setup
// views will be served from the 'views' directory
app.set('views', path.join(__dirname, 'views'));
//use ejs as the templating view engine
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//static content will be served from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'views')));

//for a request @ localhost:3000/ use this reouter object
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
