import validateUUID from 'uuid-validate';

import { models } from '../../../database/models';
import { getUserById } from './user';

export async function upgradeUserToSponsor(userId) {
  const isValidUUID = validateUUID(userId, 4);

  if (!isValidUUID) {
    throw new Error('user cannot be upgraded');
  }

  const user = await getUserById(userId);

  if (!user) {
    throw new Error('this user does not exist');
  }

  return models.Sponsor.create({ userId }, { raw: true });
}

export async function upgradeUserToOrganiser(userId) {
  const isValidUUID = validateUUID(userId, 4);

  if (!isValidUUID) {
    throw new Error('user cannot be upgraded');
  }

  const user = await getUserById(userId);

  if (!user) {
    throw new Error('this user does not exist');
  }

  return models.Organiser.create({ userId }, { raw: true });
}
