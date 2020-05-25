module.exports = (sequelize, DataTypes) => {
  const superAdmins = sequelize.define(
    'super_admins',
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
  return superAdmins;
};
