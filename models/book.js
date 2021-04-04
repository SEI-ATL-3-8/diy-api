'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  book.init({
    title: {
      type:DataTypes.TEXT, allowNull:false,
      validate: {
        notNull: true,
      }
    },
    author: {
      type:DataTypes.TEXT,
      release_date: DataTypes.TEXT,
      validate: {
        isNumeric: true,
      }
    },
    image: {
      type:DataTypes.TEXT,

    } 
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};