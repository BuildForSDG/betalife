/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainees', {
    organizer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(trainees_organizer_id_seq::regclass)',
      primaryKey: true
    },
    badge: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone_no: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enabled: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    age_group: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    birth_month: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    education_level: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'trainees'
  });
};
