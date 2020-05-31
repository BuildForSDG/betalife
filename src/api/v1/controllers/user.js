import { models } from '../../../database/models';
import { getLoggedInUser } from '../stores/session';
import { UserProfileSchema } from '../validation/user';

export async function getUserByEmail(email) {
  return models.User.findOne({ where: { email }, raw: true });
}

export async function getUserById(id) {
  return models.User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
    raw: true
  });
}

export async function saveUser(data) {
  return models.User.create(data, { raw: true });
}

export async function updateUserProfile(input) {
  const { value, error } = UserProfileSchema.validate(input, {
    abortEarly: false,
    stripUnknown: true
  });

  if (error) {
    throw error;
  }

  const user = getLoggedInUser();

  const [affectedRow] = await models.User.update(value, {
    where: { id: user.id },
    returning: true
  });

  if (affectedRow !== 1) {
    throw new Error('update was unsuccessful');
  }

  return getUserById(user.id);
}

export async function getRoleID(user) {
  switch (user.role) {
    case 'SPONSOR':
      return models.Sponsor.findOne({
        attributes: ['id'],
        where: { userId: user.id },
        raw: true
      });
    case 'ORGANISER':
      return models.Organiser.findOne({
        attributes: ['id'],
        where: { userId: user.id },
        raw: true
      });
    case 'ADMIN':
      return models.Admin.findOne({
        attributes: ['id'],
        where: { userId: user.id },
        raw: true
      });
    case 'SUPER_ADMIN':
      return models.SuperAdmin.findOne({
        attributes: ['id'],
        where: { userId: user.id },
        raw: true
      });

    default:
      return user.id;
  }
}
