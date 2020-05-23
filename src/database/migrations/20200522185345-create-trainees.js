module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trainees', {
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
      age_group: {
        type: Sequelize.STRING
      },
      birth_month: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      eduction_level: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('trainees');
  }
};
