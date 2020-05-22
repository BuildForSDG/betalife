module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'super_admins',
      [
        {
          userId: 2,
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
