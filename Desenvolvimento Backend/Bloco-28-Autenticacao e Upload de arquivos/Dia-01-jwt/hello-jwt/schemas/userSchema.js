const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().min(5).max(15).required(),
  password: Joi.string().min(5).max(15).required(),
});

module.exports = userSchema;
