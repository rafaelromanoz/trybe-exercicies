const { Joi } = require("celebrate");

const validateParams = Joi.object().keys({
  id: Joi.string().required(),
})

module.exports = validateParams;