module.exports = (sequelize, DataTypes) => {
  const subscriptions = sequelize.define(
    'subscriptions',
    {
      email: DataTypes.STRING,
      promo_email: DataTypes.INTEGER,
      phone_no: DataTypes.STRING,
      promo_phone: DataTypes.INTEGER
    },
    {}
  );
  return subscriptions;
};
