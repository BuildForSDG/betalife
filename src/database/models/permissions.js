module.exports = (sequelize, DataTypes) => {
  const permissions = sequelize.define(
    'permissions',
    {
      name: DataTypes.STRING
    },
    {}
  );
  return permissions;
};
