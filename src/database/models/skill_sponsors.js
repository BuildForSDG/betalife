/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const SkillSponsor = sequelize.define('skill_sponsors', {
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sponsor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sponsor_description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'skill_sponsors'
  });

  SkillSponsor.associate = (models) => {
    SkillSponsor.belongsTo(models.skills, {
      foreignKey: 'skill_id',
      as: 'skills',
      onDelete: 'CASCADE'
    });
  };

  return SkillSponsor;
};
