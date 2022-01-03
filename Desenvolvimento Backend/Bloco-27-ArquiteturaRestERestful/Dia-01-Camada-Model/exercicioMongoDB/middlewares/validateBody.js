const { Joi } = require("celebrate");

const bodySchema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required()
})

module.exports = bodySchema;

