'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('wines', [
      {
         name: "Mercer Small Lot Petit Verdot",
         year: 2015,
         grapes: "green",
         country: "USA",
         region: "Washington",
         description: "Comes",
         picture: "https://usawineratings.com/cont/blog/imagePot/USAWineRatings-09042019055031000000-5d6f50a796911.jpg",
         price: 127,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         name: "Isabella",
         year: 2017,
         grapes: "purple",
         country: "USA",
         region: "Somewhere",
         description: "Isabella 2017, recently named 2019’s Best Spanish Wine",
         picture: "https://usawineratings.com/cont/blog/imagePot/USAWineRatings-09042019055046000000-5d6f50b6d3739.jpg",
         price: 100,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         name: "Rutherford Cabernet Sauvignon",
         year: 2016,
         grapes: "red",
         country: "USA",
         region: "Somewhere else",
         description: "2016 Rutherford Cabernet Sauvignon, one of the highly scored wines",
         picture: "https://usawineratings.com/cont/blog/imagePot/USAWineRatings-09042019055132000000-5d6f50e420f33.jpg",
         price: 50,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         name: "De Bortoli Rose Rose",
         year: 2019,
         grapes: "pink",
         country: "Australia",
         region: "King Valley",
         description: "The Australian Rose, De Bortoli Rose Rose 2019 comes from King Valley region of Australia.",
         picture: "https://usawineratings.com/cont/blog/imagePot/USAWineRatings-09042019055728000000-5d6f5248bd8c2.jpg",
         price: 20,
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
