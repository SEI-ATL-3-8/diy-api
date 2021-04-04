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
    await queryInterface.bulkInsert('books',[
      {
        title: 'Diary of the Wimpy Kid',
        author: 'Jeff Kinney',
        release_date: 'April 1, 2007',
        image: 'https://m.media-amazon.com/images/I/51OopytV0RL._SL500_.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        title: 'Dora\'s Storytime Collection',
        author: 'Sarah Wilson, Rober Roper',
        release_date: 'December 2003',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1350024277l/129060.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        title: 'Guns, Germs, and Steel',
        author: 'Jared Diamond',
        release_date: '1997',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51-KH9CL1SL._SX342_SY445_QL70_ML2_.jpg',
        createdAt: new Date(),
        updatedAt: new Date() 
      }
  ], {});
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
