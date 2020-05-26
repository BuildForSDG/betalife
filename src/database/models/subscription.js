import { DataTypes } from 'sequelize';

import { sequelize } from '../config';

export const Subscription = sequelize.define(
  'Subscription',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    email: DataTypes.STRING,
    promo_email: DataTypes.INTEGER,
    phone_no: DataTypes.STRING,
    promo_phone: DataTypes.INTEGER
  },
  { tableName: 'subscriptions', paranoid: true }
);
