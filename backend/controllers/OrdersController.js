const asyncHandler = require("express-async-handler");
const Order = require("../models/Order");
const generateToken = require("../config/generateToken");

const createOrder = asyncHandler(async (req, res) => {
    const { user, pair, order_type, price } = req.body;

    if(!user || !pair || !order_type || !price){
        res.status(400);
        // throw new Error("Please enter all required fields");
        res.json({error: "Please enter all required fields"});
    }
});