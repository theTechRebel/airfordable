'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      {
        id: {
          type: Sequelize.INTEGER
        },
        autoIncrement: {
          type: Sequelize.TRUE
        },
        primaryKey: {
          type: Sequelize.TRUE
        }
      },
      {
        title: {
          type: Sequelize.STRING
        }
      },
      {
        text: {
          type: Sequelize.TEXT
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Posts');
  }
};