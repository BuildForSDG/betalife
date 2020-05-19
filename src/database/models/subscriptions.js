/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscriptions', {
    subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval(subscriptions_subscription_id_seq::regclass)',
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
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
};
