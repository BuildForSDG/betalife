module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true
      }),
      queryInterface.addColumn('events', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true
      }),
      queryInterface.addColumn('messages', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true
      }),
      queryInterface.addColumn('permissions', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true
      }),
      queryInterface.addColumn('skills', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true
      }),
      queryInterface.addColumn('sponsors_events', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true
      }),
      queryInterface.addColumn('subscriptions', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true
      })
    ]);
  },

  down: queryInterface => {
    return Promise.all([
      queryInterface.removeColumn('users', 'deletedAt'),
      queryInterface.removeColumn('events', 'deletedAt'),
      queryInterface.removeColumn('messages', 'deletedAt'),
      queryInterface.removeColumn('permissions', 'deletedAt'),
      queryInterface.removeColumn('skills', 'deletedAt'),
      queryInterface.removeColumn('sponsors_events', 'deletedAt'),
      queryInterface.removeColumn('subscriptions', 'deletedAt')
    ]);
  }
};
