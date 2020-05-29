module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'users',
          'deletedAt',
          {
            type: Sequelize.DATE,
            allowNull: true
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'events',
          'deletedAt',
          {
            type: Sequelize.DATE,
            allowNull: true
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'messages',
          'deletedAt',
          {
            type: Sequelize.DATE,
            allowNull: true
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'permissions',
          'deletedAt',
          {
            type: Sequelize.DATE,
            allowNull: true
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'skills',
          'deletedAt',
          {
            type: Sequelize.DATE,
            allowNull: true
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'sponsors_events',
          'deletedAt',
          {
            type: Sequelize.DATE,
            allowNull: true
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'subscriptions',
          'deletedAt',
          {
            type: Sequelize.DATE,
            allowNull: true
          },
          { transaction: t }
        )
      ]);
    });
  },

  down: async queryInterface => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'deletedAt', { transaction: t }),
        queryInterface.removeColumn('events', 'deletedAt', { transaction: t }),
        queryInterface.removeColumn('messages', 'deletedAt', { transaction: t }),
        queryInterface.removeColumn('permissions', 'deletedAt', { transaction: t }),
        queryInterface.removeColumn('skills', 'deletedAt', { transaction: t }),
        queryInterface.removeColumn('sponsors_events', 'deletedAt', {
          transaction: t
        }),
        queryInterface.removeColumn('subscriptions', 'deletedAt', { transaction: t })
      ]);
    });
  }
};
