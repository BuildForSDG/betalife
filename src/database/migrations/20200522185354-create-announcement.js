module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('announcements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      for_admin: {
        type: Sequelize.INTEGER
      },
      for_sponsor: {
        type: Sequelize.INTEGER
      },
      for_organiser: {
        type: Sequelize.INTEGER
      },
      for_trainee: {
        type: Sequelize.INTEGER
      },
      for_superadmins: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('announcements');
  }
};
