const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const envConfigs = require('../config/config');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];

const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.admins = require('./admins.js')(sequelize, Sequelize);
db.permissions = require('./permissions.js')(sequelize, Sequelize);
db.admin_permissions = require('./admin_permisions.js')(sequelize, Sequelize);
db.audiences = require('./audiences.js')(sequelize, Sequelize);
db.interests = require('./interests.js')(sequelize, Sequelize);
db.likes = require('./likes.js')(sequelize, Sequelize);
db.locations = require('./locations.js')(sequelize, Sequelize);
db.skill_categories = require('./skill_categories.js')(sequelize, Sequelize);
db.skill_sponsors = require('./skill_sponsors.js')(sequelize, Sequelize);
db.skills = require('./skills.js')(sequelize, Sequelize);
db.sponsors = require('./sponsors.js')(sequelize, Sequelize);

db.admins.hasMany(db.admin_permisions, {
  as: 'admin_permisions',
  onDelete: 'CASCADE'
});
db.permissions.hasMany(db.admin_permisions, {
  as: 'admin_permisions',
  onDelete: 'CASCADE'
});

db.admin_permissions.belongsTo(db.admins, {
  foreignKey: 'adminId',
  as: 'admin',
  onDelete: 'CASCADE'
});

db.admin_permissions.belongsTo(db.permissions, {
  foreignKey: 'permissionId',
  as: 'permission',
  onDelete: 'CASCADE'
});

db.audiences.hasMany(db.skills, {
  as: 'skills',
  onDelete: 'CASCADE'
});

db.skill_categories.hasMany(db.skills, {
  as: 'skills',
  onDelete: 'CASCADE'
});

db.locations.hasMany(db.skills, {
  as: 'skills',
  onDelete: 'CASCADE'
});

db.skills.hasMany(db.interests, {
  as: 'interest',
  onDelete: 'CASCADE'
});

db.skills.hasMany(db.skill_sponsors, {
  as: 'sponsors',
  onDelete: 'CASCADE'
});

db.sponsors.hasMany(db.likes, {
  as: 'likes',
  onDelete: 'CASCADE'
});

db.likes.belongsTo(db.sponsors, {
  foreignKey: 'sponsorId',
  as: 'sponsor',
  onDelete: 'CASCADE'
});

db.skills.belongsTo(db.audiences, {
  foreignKey: 'audienceId',
  as: 'audience',
  onDelete: 'CASCADE'
});

db.skills.belongsTo(db.skill_categories, {
  foreignKey: 'categoryId',
  as: 'categories',
  onDelete: 'CASCADE'
});

db.skills.belongsTo(db.locations, {
  foreignKey: 'locationId',
  as: 'locations',
  onDelete: 'CASCADE'
});

db.skill_sponsors.belongsTo(db.skills, {
  foreignKey: 'skillId',
  as: 'skills',
  onDelete: 'CASCADE'
});

db.interests.belongsTo(db.skills, {
  foreignKey: 'skillId',
  as: 'skills',
  onDelete: 'CASCADE'
});

module.exports = db;
