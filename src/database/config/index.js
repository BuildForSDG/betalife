import { Sequelize } from 'sequelize';
import envConfigs from './config';

const env = process.env.NODE_ENV || 'development';
const { url, ...config } = envConfigs[env];
const showLogs = env === 'development' ? console.log : false;

export const sequelize = new Sequelize(url, {
  logging: showLogs,
  sync: { force: false },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  ...config
});
