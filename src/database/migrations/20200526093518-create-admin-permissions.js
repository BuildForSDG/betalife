module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('admins_permissions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      admin_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'admins'
          },
          key: 'id'
        },
        allowNull: false
      },
      permission_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'permissions'
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
    return queryInterface.dropTable('admins_permissions');
  }
};
