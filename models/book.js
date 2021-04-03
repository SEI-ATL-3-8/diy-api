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
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    releaseDate: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};