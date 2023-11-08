'use strict';
const fs = require('fs');
const { hashPass } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let dataUser = fs.readFileSync('./data/users.json', 'utf-8');

    dataUser = JSON.parse(dataUser);

    dataUser.forEach(e => {
      e.password = hashPass(e.password)
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });

    await queryInterface.bulkInsert('Users', dataUser);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', dataUser);
  }
};
