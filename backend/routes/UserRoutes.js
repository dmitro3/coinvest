const express = require("express");
const {
  registerUser, authUser, getNonce
} = require("../controllers/UserController");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/nonce").post(getNonce);
router.route("/auth").post(authUser);

module.exports = router;