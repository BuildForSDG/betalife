import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

import { sequelize } from '../config';

export const SponsorEvent = sequelize.define(
  'SponsorEvent',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    eventId: { type: DataTypes.UUID, field: 'event_id' },
    sponsorId: { type: DataTypes.UUID, field: 'sponsor_id' },
    request: { type: DataTypes.TEXT },
    approvedStatus: {
      type: DataTypes.ENUM(['APPROVED', 'UNAPPROVED', 'REJECTED']),
      field: 'sponsor_id',
      defaultValue: 'UNAPPROVED'
    }
  },
  { tableName: 'sponsors_events', paranoid: true }
);
