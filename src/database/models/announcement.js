module.exports = (sequelize, DataTypes) => sequelize.define('announcement', {
  anouncement_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 'nextval(announcement_anouncement_id_seq::regclass)',
    primaryKey: true
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  for_admin: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  for_sponsor: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  for_organiser: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  for_trainee: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  for_super_admin: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  date_created: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'announcement'
});
