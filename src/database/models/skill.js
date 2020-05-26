import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

import { sequelize } from '../config';

export const Skill = sequelize.define(
  'Skill',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  },
  { tableName: 'skills', paranoid: true }
);
