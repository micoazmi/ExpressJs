const express = require("express");
const ProfileController = require("../controller/ProfileController");
const authenticateToken = require("../middlewares/authentication");
const router = express.Router();

// Profile route
router.get("/", authenticateToken, ProfileController.getProfile);

module.exports = router;
