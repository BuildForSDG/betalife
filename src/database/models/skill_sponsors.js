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

  return SkillSponsor;
};
