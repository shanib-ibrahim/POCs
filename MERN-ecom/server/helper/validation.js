import Joi from "joi";

export const signUpSchema = Joi.object().keys({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string().min(13).max(50).required(),
  password: Joi.string().min(3).max(12).required(),
});
export const loginSchema = Joi.object().keys({
  email: Joi.string().min(13).max(50).required(),
  password: Joi.string().min(3).max(12).required(),
});
