import Joi from '@hapi/joi';

export const EventSchema = Joi.object().keys({
  title: Joi.string().min(5).required(),
  description: Joi.string().min(10).required(),
  category: Joi.string().valid('free', 'paid').required(),
  fee: Joi.string().min(2),
  registerStart: Joi.date().iso().min('now').required(),
  registerEnd: Joi.date().iso().min('now').required(),
  startDate: Joi.date().iso().min('now').required(),
  endDate: Joi.date().iso().min('now').required(),
  address: Joi.string().min(2).required(),
  city: Joi.string().min(2).required(),
  state: Joi.string().min(2).required(),
  contactAddress: Joi.string().min(2),
  contactEmail: Joi.string().min(2).required(),
  contactPhone: Joi.string().min(2)
});
