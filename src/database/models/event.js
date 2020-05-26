import { DataTypes } from 'sequelize';

import { sequelize } from '../config';

export const Event = sequelize.define(
  'Event',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: { type: DataTypes.ENUM(['free', 'paid']), allowNull: false },
    fee: DataTypes.STRING,
    registerStart: { type: DataTypes.DATE, field: 'register_start' },
    registerEnd: { type: DataTypes.DATE, field: 'register_end' },
    startDate: { type: DataTypes.DATE, field: 'start_date' },
    endDate: { type: DataTypes.DATE, field: 'end_date' },
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    contactAddress: { type: DataTypes.STRING, field: 'contact_address' },
    contactEmail: { type: DataTypes.STRING, field: 'contact_email' },
    contactPhone: { type: DataTypes.STRING, field: 'contact_phone' }
  },
  { tableName: 'events', paranoid: true }
);
