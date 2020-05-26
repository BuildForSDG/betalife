module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events_users', {
      id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.UUID
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        }
      },
      event_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'events'
          },
          key: 'id'
        }
      },
      like: { type: Sequelize.INTEGER },
      follow: { type: Sequelize.INTEGER }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('events_users');
  }
};
