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
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'admin_permisions'
  });

  return AdminPermision;
};
