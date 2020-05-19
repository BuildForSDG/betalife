module.exports = (sequelize, DataTypes) => sequelize.define('subscriptions', {
  subscription_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 'nextval(subscriptions_subscription_id_seq::regclass)',
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  promo_email: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  promo_phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date_created: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'subscriptions'
});
