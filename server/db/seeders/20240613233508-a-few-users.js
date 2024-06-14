'use strict';
const { User } = require("../models")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await User.bulkCreate([

      {
        username: "Raven",
        password: "password",
        age: 34
      },
      {
        username: "Chelsea",
        password: "password1",
        age: 35
      },
      {
        username: "Eddie",
        password: "password2",
        age: 33
      }

    ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
