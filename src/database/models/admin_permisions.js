/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const AdminPermision = sequelize.define('admin_permisions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(admin_permisions_id_seq::regclass)',
      primaryKey: true
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    tableName: 'admin_permisions'
  });

  AdminPermision.associate = (models) => {
    AdminPermision.belongsTo(models.admin, {
      foreignKey: 'admin_id',
      as: 'admin',
      onDelete: 'CASCADE'
    });

    AdminPermision.belongsTo(models.permissions, {
      foreignKey: 'permission_id',
      as: 'permission',
      onDelete: 'CASCADE'
    });
  };

  return AdminPermision;
};
