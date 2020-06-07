import validate from 'uuid-validate';

import { models } from '../../../database/models';
import { EventSchema, SponsorEventSchema } from '../validation/event';
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

export async function registerForEvent(userId, eventId) {
  const isValidUserId = validate(userId, 4);
  const isValidEventId = validate(eventId, 4);

  if (!isValidEventId || !isValidUserId) {
    throw new Error('invalid request');
  }

  return models.EventUser.create({ userId, eventId }, { raw: true });
}

export async function sponsorAnEvent(sponsorId, eventId, request) {
  const isValidUserId = validate(sponsorId, 4);
  const isValidEventId = validate(eventId, 4);

  if (!isValidEventId || !isValidUserId) {
    throw new Error('invalid request');
  }

  const { value, error } = SponsorEventSchema.validate(request, {
    stripUnknown: true
  });

  if (error) {
    throw error;
  }

  return models.SponsorEvent.create(
    { sponsorId, eventId, request: value.request },
    { raw: true }
  );
}
