import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

import { sequelize } from '../config';

export const Subscription = sequelize.define(
  'Subscription',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    email: DataTypes.STRING,
    promo_email: DataTypes.INTEGER,
    phone_no: DataTypes.STRING,
    promo_phone: DataTypes.INTEGER
  },
  { tableName: 'subscriptions', paranoid: true }
);
