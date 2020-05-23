module.exports = (sequelize, DataTypes) => {
  const messages = sequelize.define(
    'messages',
    {
      from_userId: DataTypes.INTEGER,
      to_userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {}
  );
  return messages;
};
