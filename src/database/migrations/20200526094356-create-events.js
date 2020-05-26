module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: { type: Sequelize.TEXT, allowNull: false },
      category: { type: Sequelize.ENUM(['free', 'paid']), allowNull: false },
      fee: Sequelize.STRING,
      register_start: { type: Sequelize.DATE },
      register_end: { type: Sequelize.DATE },
      start_date: { type: Sequelize.DATE, allowNull: false },
      end_date: { type: Sequelize.DATE, allowNull: false },
      address: { type: Sequelize.STRING, allowNull: false },
      city: { type: Sequelize.STRING, allowNull: false },
      state: { type: Sequelize.STRING, allowNull: false },
      contact_address: { type: Sequelize.STRING },
      contact_email: { type: Sequelize.STRING, allowNull: false },
      contact_phone: { type: Sequelize.STRING }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('events');
  }
};
