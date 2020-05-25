module.exports = (sequelize, DataTypes) => {
  const organizers = sequelize.define(
    'organizers',
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
  return organizers;
};
