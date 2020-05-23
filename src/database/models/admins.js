module.exports = (sequelize, DataTypes) => {
  const admins = sequelize.define(
    'admins',
    {
      userId: DataTypes.INTEGER
    },
    {}
  );
  return admins;
};
