'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('movies', [{
                title: "Avengers: Endgame",
                director: "Joe Russo",
                release_date: "April 26, 2019",
                image_url: "https://images-na.ssl-images-amazon.com/images/I/91e9898R7QL._RI_.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Guardians of the Galaxy",
                director: "James Gun",
                release_date: "August 1, 2014",
                image_url: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Thor: Ragnarok",
                director: "Taika Waititi",
                release_date: "November 3, 2017",
                image_url: "https://images-na.ssl-images-amazon.com/images/I/A1HBBNzBdxL._AC_SL1500_.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Doctor Strange",
                director: "Sam Raimi",
                release_date: "October 13, 2016",
                image_url: "https://images-na.ssl-images-amazon.com/images/I/61I3Spoil6L._SX342_.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Black Panther",
                director: "Ryan Coogler",
                release_date: "January 29, 2018",
                image_url: "https://images-na.ssl-images-amazon.com/images/I/61a03Zq9oRL._AC_.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Captain America: The First Avenger",
                director: "Joe Johnston",
                release_date: "July 19, 2011",
                image_url: "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Spider-Man: Far from Home",
                director: "Jon Watts",
                release_date: "July 2, 2019",
                image_url: "https://images-na.ssl-images-amazon.com/images/I/91A+eXyGmvL._RI_.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: "Iron Man 3",
                director: "Shane Black",
                release_date: "May 3, 2013",
                image_url: "https://images-na.ssl-images-amazon.com/images/I/81qwPaPvCYL._SL1016_.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])


    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};