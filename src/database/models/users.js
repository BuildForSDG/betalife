module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'users',
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      photo: DataTypes.STRING,
      address: DataTypes.STRING,
      enabled: DataTypes.INTEGER,
      hash: DataTypes.STRING
    },
    {}
  );
  return Users;
};
