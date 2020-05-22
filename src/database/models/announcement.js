module.exports = (sequelize, DataTypes) => {
  const announcement = sequelize.define(
    'announcement',
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      for_admin: DataTypes.INTEGER,
      for_sponsor: DataTypes.INTEGER,
      for_organiser: DataTypes.INTEGER,
      for_trainee: DataTypes.INTEGER,
      for_superadmins: DataTypes.INTEGER
    },
    {}
  );
  return announcement;
};
