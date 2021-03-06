const { v4: uuid } = require('uuid');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'super_admins',
      [
        {
          id: uuid(),
          user_id: '97e5902e-05d4-4662-9de6-6328b6c20aca',
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
