/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Permision = sequelize.define('permissions', {
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(permissions_permission_id_seq::regclass)',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'permissions'
  });

  return Permision;
};
