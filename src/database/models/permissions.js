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

  Permision.associate = (models) => {
    Permision.hasMany(models.admin_permisions, {
      foreignKey: 'permision_id',
      as: 'admin_permisions',
      onDelete: 'CASCADE'
    });
  };

  return Permision;
};
