const joi = require("joi");

const userSchema = joi.object({
  name: joi.string().min(3).max(30).required()
  .messages({
    "string.empty": `Name is required.`,
    "string.min": `Name should have a minimum length of {#limit}.`,
    "string.max": `Name should have a maximum length of {#limit}.`,
  }),
  cnic: joi
    .string()
    .pattern(/^\d{13}$/)
    .required()
    .messages({
      "string.pattern.base":
        `CNIC must be exactly 13 digits and contain only numbers.`,
    }),
  email: joi.string().email().required(),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = {userSchema, loginSchema};
