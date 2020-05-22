module.exports = (sequelize, DataTypes) => {
  const audiences = sequelize.define(
    'audiences',
    {
      audience_name: DataTypes.STRING,
      audience_type: DataTypes.STRING
    },
    {}
  );
  return audiences;
};
