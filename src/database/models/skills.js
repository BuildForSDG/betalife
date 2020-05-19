/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('skills', {
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(skills_skill_id_seq::regclass)',
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    audience_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fee: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    register_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    register_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'skills'
  });

  Skill.associate = (models) => {
    Skill.hasMany(models.interest, {
      foreignKey: 'skill_id',
      as: 'interest',
      onDelete: 'CASCADE'
    });

    Skill.hasMany(models.skill_sponsors, {
      foreignKey: 'skill_id',
      as: 'sponsors',
      onDelete: 'CASCADE'
    });

    Skill.belongsTo(models.audiences, {
      foreignKey: 'audience_id',
      as: 'audience',
      onDelete: 'CASCADE'
    });

    Skill.belongsTo(models.skill_categories, {
      foreignKey: 'category_id',
      as: 'categories',
      onDelete: 'CASCADE'
    });

    Skill.belongsTo(models.locations, {
      foreignKey: 'location_id',
      as: 'locations',
      onDelete: 'CASCADE'
    });
  };

  return Skill;
};
