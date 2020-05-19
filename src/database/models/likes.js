/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('likes', {
    badge: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sponsor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sponsor_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enabled: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'likes'
  });

  Like.associate = (models) => {
    Like.belongsTo(models.sponsor, {
      foreignKey: 'sponsor_id',
      as: 'skills',
      onDelete: 'CASCADE'
    });
  };

  return Like;
};
