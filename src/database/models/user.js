import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

import { sequelize } from '../config';

export const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
    },
    firstName: { type: DataTypes.STRING, field: 'first_name' },
    lastName: { type: DataTypes.STRING, field: 'last_name' },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    emailVerified: {
      type: DataTypes.INTEGER,
      field: 'email_verified',
      defaultValue: 0
    },
    password: { type: DataTypes.STRING },
    phone: DataTypes.STRING,
    phoneVerified: {
      type: DataTypes.INTEGER,
      field: 'phone_verified',
      defaultValue: 0
    },
    role: {
      type: DataTypes.ENUM([
        'TRAINEE',
        'SPONSOR',
        'ORGANISER',
        'ADMIN',
        'SUPER_ADMIN'
      ])
    },
    photo: DataTypes.STRING,
    ageGroup: { type: DataTypes.STRING, field: 'age_group' },
    dateOfBirth: { type: DataTypes.DATEONLY, field: 'date_of_birth' },
    sex: DataTypes.STRING,
    educationLevel: { type: DataTypes.STRING, field: 'education_level' },
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    enabled: { type: DataTypes.INTEGER, defaultValue: 0 },
    hash: DataTypes.STRING
  },
  { paranoid: true, tableName: 'users' }
);
