import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

import { sequelize } from '../config';

export const Permission = sequelize.define(
  'Permission',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    name: DataTypes.STRING
  },
  { tableName: 'permissions', paranoid: true }
);
