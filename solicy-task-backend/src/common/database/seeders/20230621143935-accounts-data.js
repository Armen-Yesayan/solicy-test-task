'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const owners = await queryInterface.sequelize.query('SELECT id FROM owners');
    const accounts = owners[0].map((owner) => (
        {
          id: faker.string.uuid(),
          name: faker.internet.userName(),
          owner_id: owner.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ))
    return queryInterface.bulkInsert('accounts', accounts, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accounts', null, {});
  }
};
