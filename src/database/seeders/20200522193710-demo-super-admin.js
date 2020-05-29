const { v4: uuid } = require('uuid');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'super_admins',
      [
        {
          id: uuid(),
          user_id: '1bb47d48-a93e-4f4d-ac01-6c2de3f3249d',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('super_admins', null, {});
  }
};
