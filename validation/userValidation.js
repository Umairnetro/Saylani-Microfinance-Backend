const joi = require("joi");

const userSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  cnic: joi
    .string()
    .pattern(/^\d{13}$/)
    .required()
    .messages({
      "string.pattern.base":
        "CNIC must be exactly 13 digits and contain only numbers.",
    }),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = userSchema;
