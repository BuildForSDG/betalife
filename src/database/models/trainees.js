module.exports = (sequelize, DataTypes) => {
  const trainees = sequelize.define(
    'trainees',
    {
      userId: DataTypes.INTEGER,
      age_group: DataTypes.STRING,
      birth_month: DataTypes.STRING,
      sex: DataTypes.STRING,
      eduction_level: DataTypes.STRING
    },
    {}
  );
  return trainees;
};
