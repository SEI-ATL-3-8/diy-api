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
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
      }
    },
    year: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        notNull: true,
        isNumeric: true,
        min: 1900,
        max: 2040
      }
    },
    grapes: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    },
    country: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        isAlpha: true
      }
    },
    region: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    },
    description: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    },
    picture: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    },
    price: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        isNumeric: true,
        notNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'wine',
  });
  return wine;
};