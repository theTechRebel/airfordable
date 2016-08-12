var Sequelize = require('sequelize');
var config = require('../config/config').development;

var db = new Sequelize(config.database, config.user, config.password,{dialect:config.dialect,host:config.host});

//test the connection 
db
  .authenticate()
  .then(function(err) {
    console.log('Database connection established: '+err);
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:'+err);
  });

module.exports = db;