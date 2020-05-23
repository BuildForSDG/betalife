module.exports = (sequelize, DataTypes) => {
  const superAdmins = sequelize.define(
    'super_admins',
    {
      userId: DataTypes.INTEGER
    },
    {}
  );
  return superAdmins;
};
