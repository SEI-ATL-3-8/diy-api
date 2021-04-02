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
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    grapes: DataTypes.STRING,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wine',
  });
  return wine;
};