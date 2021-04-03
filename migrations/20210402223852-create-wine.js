'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('wines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      year: {
        type: Sequelize.INTEGER
      },
      grapes: {
        type: Sequelize.TEXT
      },
      country: {
        type: Sequelize.TEXT
      },
      region: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      picture: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('wines');
  }
};