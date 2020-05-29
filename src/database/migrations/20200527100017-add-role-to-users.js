module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'role', {
      type: Sequelize.ENUM([
        'TRAINEE',
        'SPONSOR',
        'ORGANISER',
        'ADMIN',
        'SUPER_ADMIN'
      ]),
      allowNull: false,
      defaultValue: 'TRAINEE'
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'role');
  }
};
