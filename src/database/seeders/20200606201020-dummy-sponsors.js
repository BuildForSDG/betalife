const { v4: uuid } = require('uuid');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'sponsors',
      [
        {
          id: uuid(),
          user_id: '16352ad4-6a21-405d-a1d0-821a80c085eb',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('sponsors', null, {});
  }
};
