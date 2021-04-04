'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class winelist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  winelist.init({
    name:{type: DataTypes.STRING,
    validate:{
      notEmpty: true
    }},
    year: { type: DataTypes.INTEGER,
    validate:{
       isNumeric: true,
       isInt: true
    }
   },
    grape: {type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }},
    country: {type: DataTypes.STRING,
      validate:{
        notEmpty:true
      }},
    region: {type: DataTypes.STRING,
      validate:{
        notEmpty:true
      }},
    description: {type: DataTypes.STRING,
      validate:{
        notEmpty:true
      }},
    picture:{type: DataTypes.STRING,
      validate:{
        notEmpty:true,
        isUrl: true
      }},
    price: { type: DataTypes.INTEGER,
      validate:{
         isNumeric: true,
         isInt: true
      }
     }
  }, 
  
  {
    sequelize,
    modelName: 'winelist',
  });
  return winelist;
};