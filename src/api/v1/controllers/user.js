import { models } from '../../../database/models';

export async function getUserByEmail(email) {
  return models.User.findOne({ where: { email }, raw: true });
}

export async function saveUser(data) {
  return models.User.create(data, { raw: true });
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
