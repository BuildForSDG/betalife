module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sponsors_events', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
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
      sponsor_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'sponsors'
          },
          key: 'id'
        }
      },
      request: {
        type: Sequelize.TEXT
      },
      approved_status: {
        type: Sequelize.ENUM(['APPROVED', 'UNAPPROVED', 'REJECTED']),
        allowNull: false,
        defaultValue: 'UNAPPROVED'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('sponsors_events');
  }
};
