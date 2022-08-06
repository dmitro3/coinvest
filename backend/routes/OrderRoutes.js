const express = require("express");
const {
  createOrder, getOrders, createPairs, getPairs, getTokens, getUserOrders
} = require("../controllers/OrdersController");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getOrders);
// router.route("/pairs/create").get(createPairs);
router.route("/create").post(createOrder);

// Pairs
router.route("/pairs").get(getPairs);
router.route("/tokens").get(getTokens);

// User Orders
// router.route("/user").get(getUserOrders)

module.exports = router;