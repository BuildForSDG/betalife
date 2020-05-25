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
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(
    file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db associations

db.User = require('./users.js')(sequelize, Sequelize);
db.SuperAdmin = require('./super_admins.js')(sequelize, Sequelize);
db.Admin = require('./admins.js')(sequelize, Sequelize);
db.Organizer = require('./organizers.js')(sequelize, Sequelize);
db.Sponsor = require('./sponsors.js')(sequelize, Sequelize);
db.Permission = require('./permissions.js')(sequelize, Sequelize);
db.AdminPermission = require('./admin_permissions.js')(sequelize, Sequelize);
db.Audience = require('./audiences.js')(sequelize, Sequelize);
db.Interest = require('./interests.js')(sequelize, Sequelize);
db.Like = require('./likes.js')(sequelize, Sequelize);
db.Location = require('./locations.js')(sequelize, Sequelize);
db.SkillCategory = require('./skill_categories.js')(sequelize, Sequelize);
db.SkillSponsor = require('./skill_sponsors.js')(sequelize, Sequelize);
db.Skill = require('./skills.js')(sequelize, Sequelize);
db.Announcement = require('./announcement.js')(sequelize, Sequelize);
db.Message = require('./messages.js')(sequelize, Sequelize);

// ONE-TO-ONE RELATIONSHIPS
db.User.hasOne(db.SuperAdmin);
db.User.hasOne(db.Admin);
db.User.hasOne(db.interests);
db.User.hasOne(db.likes);
db.User.hasOne(db.locations);
db.User.hasOne(db.messages);
db.User.hasOne(db.Organizer);
db.User.hasOne(db.Sponsor);

db.Admin.hasMany(db.AdminPermission, {
  as: 'admin_permissions',
  onDelete: 'CASCADE'
});
db.permissions.hasMany(db.AdminPermission, {
  as: 'admin_permissions',
  onDelete: 'CASCADE'
});

db.AdminPermission.belongsTo(db.admins, {
  foreignKey: 'adminId',
  as: 'admin',
  onDelete: 'CASCADE'
});

db.AdminPermission.belongsTo(db.permissions, {
  foreignKey: 'permissionId',
  as: 'permission',
  onDelete: 'CASCADE'
});

db.Audience.hasMany(db.Skill, {
  as: 'skills',
  onDelete: 'CASCADE'
});

db.SkillCategory.hasMany(db.Skill, {
  as: 'skills',
  onDelete: 'CASCADE'
});

db.Location.hasMany(db.Skill, {
  as: 'skills',
  onDelete: 'CASCADE'
});

db.Skill.hasMany(db.Interest, {
  as: 'interest',
  onDelete: 'CASCADE'
});

db.Skill.hasMany(db.SkillSponsor, {
  as: 'sponsors',
  onDelete: 'CASCADE'
});

db.Sponsor.hasMany(db.Like, {
  as: 'likes',
  onDelete: 'CASCADE'
});

db.Like.belongsTo(db.Sponsor, {
  foreignKey: 'sponsorId',
  as: 'sponsor',
  onDelete: 'CASCADE'
});

db.Skill.belongsTo(db.Audience, {
  foreignKey: 'audienceId',
  as: 'audience',
  onDelete: 'CASCADE'
});

db.Skill.belongsTo(db.SkillCategory, {
  foreignKey: 'categoryId',
  as: 'categories',
  onDelete: 'CASCADE'
});

db.Skill.belongsTo(db.Location, {
  foreignKey: 'locationId',
  as: 'locations',
  onDelete: 'CASCADE'
});

db.SkillSponsor.belongsTo(db.Skill, {
  foreignKey: 'skillId',
  as: 'skills',
  onDelete: 'CASCADE'
});

db.Interest.belongsTo(db.Skill, {
  foreignKey: 'skillId',
  as: 'skills',
  onDelete: 'CASCADE'
});

module.exports = db;
