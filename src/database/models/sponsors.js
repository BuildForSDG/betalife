module.exports = (sequelize, DataTypes) => {
  const sponsors = sequelize.define(
    'sponsors',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      },
      organisation: DataTypes.STRING
    },
    {}
  );
  return sponsors;
};
