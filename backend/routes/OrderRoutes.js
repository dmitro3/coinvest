const express = require("express");
const {
  createOrder, getOrders, createPairs, getPairs, getUserOrders, getOrderBook
} = require("../controllers/OrdersController");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getOrders);
// router.route("/pairs/create").get(createPairs);
router.route("/create").post(createOrder);
router.route("/book").get(getOrderBook);

// Pairs
router.route("/pairs").get(getPairs);

// User Orders
// router.route("/user").get(getUserOrders)

module.exports = router;