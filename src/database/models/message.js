import { DataTypes } from 'sequelize';

import { sequelize } from '../config';

export const Message = sequelize.define(
  'Message',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    from: DataTypes.UUID,
    to: DataTypes.UUID,
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  },
  { tableName: 'messages', paranoid: true }
);
