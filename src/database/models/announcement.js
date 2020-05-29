import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

import { sequelize } from '../config';

export const Announcement = sequelize.define(
  'Announcement',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    userId: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    for_admin: DataTypes.INTEGER,
    for_sponsor: DataTypes.INTEGER,
    for_organiser: DataTypes.INTEGER,
    for_trainee: DataTypes.INTEGER,
    for_superadmins: DataTypes.INTEGER
  },
  { tableName: 'announcements' }
);
