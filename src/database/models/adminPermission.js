import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';

import { sequelize } from '../config';
import { Admin } from './admin';
import { Permission } from './permission';

export const AdminPermission = sequelize.define(
  'AdminPermission',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid()
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
