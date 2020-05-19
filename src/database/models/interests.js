/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Interest = sequelize.define('interests', {
    badge: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sponsor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enabled: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'interests'
  });

  Interest.associate = (models) => {
    Interest.belongsTo(models.skills, {
      foreignKey: 'skill_id',
      as: 'skills',
      onDelete: 'CASCADE'
    });
  };

  return Interest;
};
