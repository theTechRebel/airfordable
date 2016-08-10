var Sequelize = require('sequelize');
var orm = new Sequelize('airfordable', 'root', '',{dialect:'mysql',host:'localhost'});

//user model
var User = orm.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
/*User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});*/

module.exports = orm;