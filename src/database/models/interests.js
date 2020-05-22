module.exports = (sequelize, DataTypes) => {
  const interests = sequelize.define(
    'interests',
    {
      userId: DataTypes.INTEGER,
      skillId: DataTypes.INTEGER,
      sponsorId: DataTypes.INTEGER,
      enabled: DataTypes.INTEGER
    },
    {}
  );
  return interests;
};
