module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('locations', {
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(locations_location_id_seq::regclass)',
      primaryKey: true
    },
    location_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'locations'
  });

  return Location;
};
