const express = require("express");
const {
  getBaskets,
  createBasket,
  updateBasket,
  deleteBasket
} = require("../controllers/BasketsController");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getBaskets); // GET Get All Baskets
router.route("/").post(createBasket); // POST Create New Basket
router.route("/:basket").put(updateBasket); // PUT Update Basket [:basket] 
router.route("/:basket").delete(deleteBasket); // DELETE Delete Basket [:basket]

module.exports = router;