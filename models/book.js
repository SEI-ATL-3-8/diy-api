'use strict';

// sequelize op
const Op = require('sequelize').Op;

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
      validate: {
        isNull: true
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: true
      }
    },
    releaseDate: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};