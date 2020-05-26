import { DataTypes } from 'sequelize';

import { sequelize } from '../config';
import { Event } from './event';
import { Skill } from './skill';

export const SkillEvent = sequelize.define(
  'SkillEvent',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    skillId: {
      type: DataTypes.UUID,
      field: 'skill_id',
      references: { model: Skill, key: 'id' }
    },
    eventId: {
      type: DataTypes.UUID,
      field: 'event_id',
      references: { model: Event, key: 'id' }
    }
  },
  { tableName: 'skills_events' }
);
