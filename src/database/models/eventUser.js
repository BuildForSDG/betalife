import { DataTypes } from 'sequelize';

import { sequelize } from '../config';
import { User } from './user';
import { Event } from './event';

export const EventUser = sequelize.define(
  'EventUser',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.UUID,
      field: 'user_id',
      references: { model: User, key: 'id' }
    },
    eventId: {
      type: DataTypes.UUID,
      field: 'event_id',
      references: { model: Event, key: 'id' }
    },
    like: { type: DataTypes.INTEGER },
    follow: { type: DataTypes.INTEGER }
  },
  { tableName: 'events_users' }
);
