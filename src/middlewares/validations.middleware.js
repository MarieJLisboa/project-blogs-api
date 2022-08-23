const Joi = require('joi');
const statusError = require('../utils/error.utils');

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
const schema1 = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});
const schema2 = Joi.object({
  name: Joi.string().required(),
});

const validateLogin = async (req, _res, next) => {
  const { value } = schema.validate(req.body);
  const { email, password } = value;
  if (!email || !password) {
  next(statusError(400, 'Some required fields are missing'));
  }
  next();
};

const validateUser = async (req, _res, next) => {
  const { error } = schema1.validate(req.body);
  if (error) {
    throw statusError(400, error.message);
  }
  next();
};

const validateCategory = async (req, _res, next) => {
  const { error } = schema2.validate(req.body);
  if (error) {
    throw statusError(400, error.message);
  }
  next();
};

module.exports = {
  validateLogin,
  validateUser,
  validateCategory,
};