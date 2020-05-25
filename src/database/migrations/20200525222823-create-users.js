module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        },
        allowNull: false
      },
      email_verified: { type: Sequelize.DataTypes.INTEGER, defaultValue: 0 },
      password: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING,
        unique: true
      },
      phone_verified: { type: Sequelize.DataTypes.INTEGER, defaultValue: 0 },
      photo: {
        type: Sequelize.STRING,
        validate: {
          isUrl: true
        }
      },
      age_group: { type: Sequelize.DataTypes.STRING },
      date_of_birth: { type: Sequelize.DataTypes.DATEONLY },
      sex: { type: Sequelize.DataTypes.STRING },
      education_level: { type: Sequelize.DataTypes.STRING },
      address: {
        type: Sequelize.STRING
      },
      city: Sequelize.DataTypes.STRING,
      state: Sequelize.DataTypes.STRING,
      enabled: {
        type: Sequelize.INTEGER
      },
      hash: {
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
    return queryInterface.dropTable('Users');
  }
};
