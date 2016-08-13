module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Posts', {
      id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      text: DataTypes.TEXT
    }, 
    {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
return Post;
};