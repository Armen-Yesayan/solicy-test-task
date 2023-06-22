'use strict';
const { faker } = require('@faker-js/faker');
const owners = [...Array(20)].map((owner) => (
    {
      id: faker.string.uuid(),
      name: faker.internet.userName(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('owners', owners, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('owners', null, {});
  }
};
