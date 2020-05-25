module.exports = (sequelize, DataTypes) => {
  const admins = sequelize.define(
    'admins',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      }
    },
    {}
  );
  return admins;
};
