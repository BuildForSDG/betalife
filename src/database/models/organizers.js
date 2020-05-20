module.exports = (sequelize, DataTypes) => sequelize.define('organizers', {
  organizer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 'nextval(organizers_organizer_id_seq::regclass)',
    primaryKey: true
  },
  badge: {
    type: DataTypes.STRING,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  phone_no: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  enabled: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  organisation: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'organizers'
});
