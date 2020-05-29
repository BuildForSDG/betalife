import { Sequelize } from 'sequelize';
import envConfigs from './config';

const env = process.env.NODE_ENV || 'development';
const { url, ...config } = envConfigs[env];

export const sequelize = new Sequelize(url, {
  sync: { force: false },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  ...config
});
