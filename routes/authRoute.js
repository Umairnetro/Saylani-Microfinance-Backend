const express = require("express");
const router = express.Router();

// Controllers
const {
  registerController,
  LoginController,
} = require("../controllers/authController");


router.get("/", (req, res) => {
  res.send("Hello world");
});

router.post("/register", registerController);
router.post("/login", LoginController);

module.exports = router;
