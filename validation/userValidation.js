const joi = require("joi");

const userSchema = joi.object({
  name: joi.string().min(3).max(30).required().messages({
    "string.empty": `Name is required.`,
    "string.min": `Name should have a minimum length of {#limit}.`,
    "string.max": `Name should have a maximum length of {#limit}.`,
  }),
  cnic: joi
    .string()
    .pattern(/^\d{13}$/)
    .required()
    .messages({
      "string.empty": `CNIC is required.`,
      "string.pattern.base": `CNIC must be exactly 13 digits and contain only numbers.`,
    }),
  email: joi.string().email().required().messages({
    "string.empty": `Email is required.`,
    "string.email": `Email must be a valid email address.`,
  }),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = { userSchema, loginSchema };
