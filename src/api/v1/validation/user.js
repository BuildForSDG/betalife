import Joi from '@hapi/joi';

const firstName = Joi.string().min(2).max(150).lowercase().trim();
const lastName = Joi.string().min(2).max(150).trim().lowercase();
const phone = Joi.string().min(7).max(15);
const photo = Joi.string().uri({ scheme: 'https' });
const ageGroup = Joi.string().min(2);
const dateOfBirth = Joi.string().min(2);
const sex = Joi.string().valid('male', 'female');
const educationLevel = Joi.string().min(2);
const address = Joi.string().min(2);
const city = Joi.string().min(2);
const state = Joi.string().min(2);

export const UserProfileSchema = Joi.object().keys({
  firstName,
  lastName,
  phone,
  photo,
  ageGroup,
  dateOfBirth,
  sex,
  educationLevel,
  address,
  city,
  state
});
