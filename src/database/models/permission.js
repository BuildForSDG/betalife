import { DataTypes } from 'sequelize';

import { sequelize } from '../config';

export const Permission = sequelize.define(
  'Permission',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING
  },
  { tableName: 'permissions', paranoid: true }
);
