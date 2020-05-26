import { DataTypes } from 'sequelize';

import { sequelize } from '../config';
import { User } from './user';

export const Organiser = sequelize.define(
  'Organiser',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
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
