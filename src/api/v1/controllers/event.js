import validate from 'uuid-validate';

import { models } from '../../../database/models';
import { EventSchema } from '../validation/event';
import { getLoggedInUser } from '../stores/session';

export async function createEvent(input) {
  const { value, error } = EventSchema.validate(input, {
    abortEarly: false,
    stripUnknown: true
  });

  if (error) {
    throw error;
  }

  const currentUser = getLoggedInUser();

  value.organiser = currentUser.roleId;

  return models.Event.create(value, { raw: true });
}

export async function getAllEvents() {
  return models.Event.findAll();
}

export async function getEventsBySponsor(sponsorId) {
  const isValidUUID = validate(sponsorId, 4);

  if (!isValidUUID) {
    throw new Error('event does not exist');
  }

  return models.Event.findAll({ where: { organiser: sponsorId } });
}
