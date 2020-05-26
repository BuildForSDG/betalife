import { User } from './user';
import { Admin } from './admin';
import { Event } from './event';
import { EventUser } from './eventUser';
import { Message } from './message';
import { Organiser } from './organiser';
import { Permission } from './permission';
import { AdminPermission } from './adminPermission';
import { Skill } from './skill';
import { SkillEvent } from './skillEvent';
import { Sponsor } from './sponsor';
import { SponsorEvent } from './sponsorEvent';
import { Subscription } from './subscription';
import { SuperAdmin } from './superAdmin';
import { Announcement } from './announcement';

export const models = {};
models.User = User;
models.Admin = Admin;
models.SuperAdmin = SuperAdmin;
models.Sponsor = Sponsor;
models.Organiser = Organiser;
models.Event = Event;
models.Announcement = Announcement;
models.Permission = Permission;
models.Message = Message;
models.Skill = Skill;
models.Subscription = Subscription;

// One to One relationships
User.hasOne(Admin);
User.hasOne(SuperAdmin);
User.hasOne(Sponsor);
User.hasOne(Organiser);

SuperAdmin.belongsTo(User);
Sponsor.belongsTo(User);
Organiser.belongsTo(User);
Admin.belongsTo(User);

// One to Many relationships
User.hasMany(Message);
Message.belongsTo(User);
Organiser.hasMany(Event);
Event.belongsTo(Organiser);

// Many to Many relationships
User.belongsToMany(Event, { through: EventUser });
Event.belongsToMany(User, { through: EventUser });

Sponsor.belongsToMany(Event, { through: SponsorEvent });
Event.belongsToMany(Sponsor, { through: SponsorEvent });

Skill.belongsToMany(Event, { through: SkillEvent });
Event.belongsToMany(Skill, { through: SkillEvent });

Permission.belongsToMany(Admin, { through: AdminPermission });
Admin.belongsToMany(Permission, { through: AdminPermission });
