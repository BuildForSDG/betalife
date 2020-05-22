module.exports = (sequelize, DataTypes) => {
  const skillSponsors = sequelize.define(
    'skill_sponsors',
    {
      skillId: DataTypes.INTEGER,
      sponsor_description: DataTypes.STRING
    },
    {}
  );
  return skillSponsors;
};
