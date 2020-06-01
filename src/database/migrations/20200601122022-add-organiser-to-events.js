module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'events',
          'organiser',
          {
            type: Sequelize.DataTypes.UUID,
            references: {
              model: {
                tableName: 'organizers'
              },
              key: 'id'
            },
            allowNull: false
          },
          { transaction: t }
        )
      ]);
    });
  },

  down: queryInterface => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('events', 'organiser', { transaction: t })
      ]);
    });
  }
};
