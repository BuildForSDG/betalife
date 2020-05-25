module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: { type: DataTypes.STRING, field: 'first_name' },
      lastName: { type: DataTypes.STRING, field: 'last_name' },
      email: DataTypes.STRING,
      emailVerified: {
        type: DataTypes.INTEGER,
        field: 'email_verified',
        defaultValue: 0
      },
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      phoneVerified: {
        type: DataTypes.INTEGER,
        field: 'phone_verified',
        defaultValue: 0
      },
      photo: DataTypes.STRING,
      ageGroup: { type: DataTypes.STRING, field: 'age_group' },
      dateOfBirth: { type: DataTypes.DATEONLY, field: 'date_of_birth' },
      sex: DataTypes.STRING,
      educationLevel: { type: DataTypes.STRING, field: 'education_level' },
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      enabled: { type: DataTypes.INTEGER, defaultValue: 0 },
      hash: DataTypes.STRING
    },
    { paranoid: true }
  );
  return Users;
};
