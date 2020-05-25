module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'super_admins',
      [
        {
          id: 'bbb1ef27-f6fc-41a5-9962-c8d545559119',
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
