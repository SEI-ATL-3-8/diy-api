'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('books', [
      {
        title: "The Great Gatsby",
        author: "F Scott Fitzgerald",
        release_date: "April 10, 1925",
        img_url: "https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        release_date: "July 29, 1954",
        img_url: "https://m.media-amazon.com/images/I/51bJhsl5VmL.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
