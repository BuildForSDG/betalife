module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('skills_events', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      skill_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'skills'
          },
          key: 'id'
        },
        allowNull: false
      },
      event_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'events'
          },
          key: 'id'
        },
        allowNull: false
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
    return queryInterface.dropTable('skills_events');
  }
};
