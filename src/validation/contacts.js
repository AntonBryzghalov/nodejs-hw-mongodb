import { possibleContactTypes } from '../utils/possibleContactTypes.js';
import BaseJoi from 'joi';
import JoiPhoneNumber from 'joi-phone-number';
import { isValidObjectId } from 'mongoose';

const Joi = BaseJoi.extend(JoiPhoneNumber);

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().phoneNumber().required(),
  email: Joi.string().email(),
  contactType: Joi.string()
    .valid(...possibleContactTypes)
    .required(),
  isFavourite: Joi.boolean(),
  userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('User id should be a valid mongo id');
    }
    return true;
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().phoneNumber(),
  email: Joi.string().email(),
  contactType: Joi.string().valid(...possibleContactTypes),
  isFavourite: Joi.boolean(),
});
