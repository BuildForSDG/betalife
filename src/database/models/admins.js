/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('admins', {
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(admins_admin_id_seq::regclass)',
      primaryKey: true
    },
    badge: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      },
      allowNull: false
    },
    phone_no: {
      type: DataTypes.BIGINT,
      allowNull: false
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
      allowNull: false
    }
  }, {
    tableName: 'admins'
  });

  return Admin;
};
