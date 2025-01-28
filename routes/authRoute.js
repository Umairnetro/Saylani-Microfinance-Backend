const express = require("express");
const router = express.Router();

// Controllers
const {
  registerController,
  LoginController,
} = require("../controllers/authController");

// Middlewares
const validationRequest = require("../middleware/validationMiddleware");
const userSchema = require("../validation/userValidation");


router.post("/register", validationRequest(userSchema), registerController);
router.post("/login", LoginController);

module.exports = router;
