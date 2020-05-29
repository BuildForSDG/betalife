import Joi from '@hapi/joi';

const firstName = Joi.string().min(2).max(150).lowercase().trim().required();

const lastName = Joi.string().min(2).max(150).trim().lowercase().required();

const email = Joi.string().email().min(8).max(254).lowercase().trim().required();

const password = Joi.string().min(6).max(100).required();
const phone = Joi.string().min(7).max(15).required();
const photo = Joi.string().uri({ scheme: 'https' });

export const SignupSchema = Joi.object().keys({
  firstName,
  lastName,
  email,
  phone,
  password,
  photo
});

export const LoginSchema = Joi.object().keys({
  email,
  password
});
