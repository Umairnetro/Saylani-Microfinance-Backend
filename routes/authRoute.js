const express = require("express");
const router = express.Router();

// Controllers
const {
  registerController,
  LoginController,
} = require("../controllers/authController");

// Middlewares
const validationRequest = require("../middleware/validationMiddleware");
const { userSchema, loginSchema } = require("../validation/userValidation");

router.post("/register", validationRequest(userSchema), registerController);
router.post("/login", validationRequest(loginSchema), LoginController);

module.exports = router;
