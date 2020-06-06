const { v4: uuid } = require('uuid');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'admins',
      [
        {
          id: uuid(),
          user_id: '84408d63-8d39-49a9-af7f-592b400ec50e',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('admins', null, {});
  }
};
