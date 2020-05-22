module.exports = (sequelize, DataTypes) => {
  const skillCategories = sequelize.define(
    'skill_categories',
    {
      category_type: DataTypes.STRING,
      category_name: DataTypes.STRING
    },
    {}
  );
  return skillCategories;
};
