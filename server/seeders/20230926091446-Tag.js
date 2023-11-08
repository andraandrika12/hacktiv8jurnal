'use strict';
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let dataTag = fs.readFileSync('./data/tags.json', 'utf-8');

    dataTag = JSON.parse(dataTag);

    dataTag.forEach(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });

    await queryInterface.bulkInsert('Tags', dataTag);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', dataTag);
  }
};
