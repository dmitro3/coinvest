const express = require("express");
const {
  createOrder, getOrders
} = require("../controllers/OrdersController");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getOrders);
router.route("/create").post(createOrder);

module.exports = router;