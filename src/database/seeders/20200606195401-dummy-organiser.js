const { v4: uuid } = require('uuid');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'organizers',
      [
        {
          id: uuid(),
          user_id: '290c50ae-9c2f-44e6-8963-21958c433a2a',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('organizers', null, {});
  }
};
