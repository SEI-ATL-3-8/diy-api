'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  wine.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min: 1
      }
    },
    grapes: DataTypes.STRING,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min: 1
      }
    }  
  }, {
    sequelize,
    modelName: 'wine',
  });
  return wine;
};