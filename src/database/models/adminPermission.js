import { DataTypes } from 'sequelize';

import { sequelize } from '../config';
import { Admin } from './admin';
import { Permission } from './permission';

export const AdminPermission = sequelize.define(
  'AdminPermission',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    adminId: {
      type: DataTypes.UUID,
      field: 'admin_id',
      references: { model: Admin, key: 'id' }
    },
    permissionId: {
      type: DataTypes.UUID,
      field: 'permission_id',
      references: { model: Permission, key: 'id' }
    }
  },
  { tableName: 'admins_permissions' }
);
