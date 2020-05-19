/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
    messages_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(messages_messages_id_seq::regclass)',
      primaryKey: true
    },
    from_badge: {
      type: DataTypes.STRING,
      allowNull: true
    },
    to_badge: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'messages'
  });
};
