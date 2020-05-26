import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

import { sequelize } from '../config';

export const Message = sequelize.define(
  'Message',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    from: DataTypes.UUID,
    to: DataTypes.UUID,
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  },
  { tableName: 'messages', paranoid: true }
);
