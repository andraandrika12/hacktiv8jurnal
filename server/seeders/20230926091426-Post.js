'use strict';
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let dataPost = fs.readFileSync('./data/posts.json', 'utf-8');

    dataPost = JSON.parse(dataPost);

    dataPost.forEach(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });

    await queryInterface.bulkInsert('Posts', dataPost);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', dataPost);
  }
};
