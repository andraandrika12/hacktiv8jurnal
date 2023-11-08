'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Posts", "UserId", {
      type : "INTEGER",
      allowNull: false,
      references: {
        model: "Users"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("Posts", "UserId")
  }
};
