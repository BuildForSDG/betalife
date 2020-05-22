module.exports = (sequelize, DataTypes) => {
  const locations = sequelize.define(
    'locations',
    {
      userId: DataTypes.INTEGER,
      location_type: DataTypes.STRING,
      location_name: DataTypes.STRING,
      country: DataTypes.STRING,
      zip: DataTypes.STRING
    },
    {}
  );
  return locations;
};
