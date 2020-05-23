module.exports = (sequelize, DataTypes) => {
  const adminPermissions = sequelize.define(
    'admin_permissions',
    {
      userId: DataTypes.INTEGER,
      permissionId: DataTypes.INTEGER
    },
    {}
  );
  return adminPermissions;
};
