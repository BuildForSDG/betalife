/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('skill_categories', {
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(skill_categories_category_id_seq::regclass)',
      primaryKey: true
    },
    category_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'skill_categories'
  });

  Category.associate = (models) => {
    Category.hasMany(models.skills, {
      foreignKey: 'category_id',
      as: 'skills',
      onDelete: 'CASCADE'
    });
  };

  return Category;
};
