'use strict';
const { Game } = require("../models")
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
   await Game.bulkCreate([
    {
      name: "Tekken",
      category: "Fighting",
      description: "Tekken is one of the most beloved fighting game series of all time. This 3D fighting game blends martial arts and technical close-quarters combat with cartoonishly over-the-top characters and storylines to deliver a fighting game truly unlike any other with a flow and feel all its own.",
      numOfPlayers: 2,
      userId: 3
    },
    {
      name: "The Sims",
      category: "Simulation",
      description: `The game allows players to create and control virtual people, called "Sims", and manage their daily lives in a suburban setting`,
      numOfPlayers: 1,
      userId: 1
    },
    {
      name: "Elden Ring",
      category: "RPG",
      description: `An action role-playing game set in an open world environment. Gameplay is similar to that of Fallout 3 and Fallout: New Vegas, the two previous primary iterations in the series. However, unlike the previous two titles, the gun-gameplay was handled by id Software.`,
      numOfPlayers: 1,
      userId: 2
    },
    {
      name: "Fallout 4",
      category: "RPG/FPS",
      description: `a fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki and George R.R. Martin. Danger and discovery lurk around every corner in FromSoftware's largest game to-date.`,
      numOfPlayers: 1,
      userId: 3
    }
   ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */

    await queryInterface.bulkDelete('Games', null, {});

  }
};
