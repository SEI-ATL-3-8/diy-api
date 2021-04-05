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
        title:"To Kill a Mockingbird",
        author:"Harper Lee",
        releaseDate:"July 11, 1960",
        image:"https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:"The Great Gatsby",
        author:"F Scott Fitzgerald",
        releaseDate:"April 10, 1925",
        image:"https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les Miserables",
        author:"Victor Hugo",
        releaseDate:"Unknown 1862",
        image:"https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:"Around the World in 80 Days",
        author:"Jules Verne",
        releaseDate:"January 30, 1873",
        image:"https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:"Lean In",
        author:"Sheryl Sandberg",
        releaseDate:"March 11, 2013",
        image:"https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:"The Four Hour Workweek",
        author:"Tim Ferriss",
        releaseDate:"April 1, 2007",
        image:"https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:"Of Mice and Men",
        author:"John Steinbeck",
        releaseDate:"Unknown 1937",
        image:"https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:"Romeo and Juliet",
        author:"William Shakespeare",
        releaseDate:"Unknown 1597",
        image:"https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
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
