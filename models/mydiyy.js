'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mydiyy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mydiyy.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    release_date: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mydiyy',
  });
  return mydiyy;
};