const express = require("express");
const {
  getTokens
} = require("../controllers/TokensController");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getTokens);

// User Orders
// router.route("/user").get(getUserOrders)

module.exports = router;