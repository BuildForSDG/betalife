import { DataTypes } from 'sequelize';

import { sequelize } from '../config';

export const Skill = sequelize.define(
  'Skill',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  },
  { tableName: 'skills', paranoid: true }
);
