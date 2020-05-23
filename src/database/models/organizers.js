module.exports = (sequelize, DataTypes) => {
  const organizers = sequelize.define(
    'organizers',
    {
      userId: DataTypes.INTEGER,
      organisation: DataTypes.STRING
    },
    {}
  );
  return organizers;
};
