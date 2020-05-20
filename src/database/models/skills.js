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

  return Skill;
};
