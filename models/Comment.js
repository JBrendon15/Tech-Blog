const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'posts',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments'
  }
);

module.exports = Comment;
