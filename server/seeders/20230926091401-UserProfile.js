'use strict';
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let dataUserProfile = fs.readFileSync('./data/userProfiles.json', 'utf-8');

    dataUserProfile = JSON.parse(dataUserProfile);

    dataUserProfile.forEach(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });

    await queryInterface.bulkInsert('UserProfiles', dataUserProfile);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserProfiles', dataUserProfile);
  }
};
