'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("UserProfiles", "UserId", {
      type : "INTEGER",
      allowNull: false,
      references: {
        model: "Users"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("UserProfiles", "UserId")
  }
};
