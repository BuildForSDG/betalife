module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define(
    'likes',
    {
      userId: DataTypes.INTEGER,
      sponsor_description: DataTypes.TEXT,
      enabled: DataTypes.INTEGER
    },
    {}
  );
  return likes;
};
