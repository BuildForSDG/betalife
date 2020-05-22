module.exports = (sequelize, DataTypes) => {
  const sponsors = sequelize.define(
    'sponsors',
    {
      userId: DataTypes.INTEGER,
      organisation: DataTypes.STRING
    },
    {}
  );
  return sponsors;
};
