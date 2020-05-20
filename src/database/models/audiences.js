module.exports = (sequelize, DataTypes) => {
  const Audience = sequelize.define('audiences', {
    audience_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(audiences_audience_id_seq::regclass)',
      primaryKey: true
    },
    audience_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    audience_type: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'audiences'
  });

  return Audience;
};
