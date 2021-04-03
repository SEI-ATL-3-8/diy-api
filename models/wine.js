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
      type:DataTypes.TEXT, allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    year: {
      type:DataTypes.INTEGER,
      validate:{
        isNumeric:true
      }
      },
    grapes: {
      type:DataTypes.TEXT, allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    country: {
      type:DataTypes.TEXT, allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    region: {
      type:DataTypes.TEXT, allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    description: {
      type:DataTypes.TEXT, allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    picture: {
      type:DataTypes.TEXT,
      validate:{
        isUrl:true
      }
    },
    price: {
      type:DataTypes.INTEGER,
      validate:{
        isNumeric:true
      }
    }
  }, {
    sequelize,
    modelName: 'wine',
  });
  return wine;
};