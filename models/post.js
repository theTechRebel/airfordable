//require Sequelize
var Sequelize = require('sequelize');
//require my database
var db = require('./db');

//create Post schema
var Post = db.define(
  'post',
  {
    id:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    title:{
      type:Sequelize.STRING
    },
    text: {
      type:Sequelize.TEXT
    }
  },
  {
    timestamps:false,
    tableName:'posts'
  }
);

//throw in some sample posts
Post.sync({force: true})
      .then(function(){
        return Post.create({
        title: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      })
      .then(function(){
      return Post.create({
      title: "Sed egestas",
      text: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
      })
      .then(function(){
      return Post.create({
      title:'Third Wordpress Post',
      text:'Some text that follows this post'   
      });
    });
  });
});

//export the Post object
module.exports = Post;