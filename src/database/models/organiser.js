import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

import { sequelize } from '../config';
import { User } from './user';

export const Organiser = sequelize.define(
  'Organiser',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: User,
        key: 'id'
      }
    },
    organisation: { type: DataTypes.STRING, unique: true }
  },
  { tableName: 'organisers' }
);
