'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('books', [
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        release_date: 'July 11, 1960',
        image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        title: 'The Great Gatsby',
        author: 'F Scott Fitzgerald',
        release_date: 'April 10, 1925',
        image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        title: 'Les Miserables',
        author: 'Victor Hugo',
        release_date: 'Unknown 1862',
        image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        title: 'Around the World in 80 Days',
        author: 'Jules Verne',
        release_date: 'January 30, 1873',
      image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        title: 'Lean In',
      author: 'Sheryl Sandberg',
      release_date: 'March 11, 2013',
      image: 'https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
     }
     ])
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
