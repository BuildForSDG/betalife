module.exports = (sequelize, DataTypes) => {
  const skills = sequelize.define(
    'skills',
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      audienceId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      locationId: DataTypes.INTEGER,
      fee: DataTypes.STRING,
      register_start: DataTypes.DATE,
      register_end: DataTypes.DATE,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE
    },
    {}
  );
  return skills;
};
