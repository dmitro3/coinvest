const asyncHandler = require("express-async-handler");
const Order = require("../models/Order");
const generateToken = require("../config/generateToken");
const { ObjectId } = require('mongodb');
const createOrder = asyncHandler(async (req, res) => {
    const { user, pair, order_type, price, quantity } = req.body;

    if(!user || !pair || !order_type || !price || !quantity){
        res.status(400);
        // throw new Error("Please enter all required fields");
        res.json({error: "Please enter all required fields"});
    }

    const order = await Order.create({
        user,
        pair,
        order_type,
        price,
        quantity
    });

    res.status(201).json(order);
});

const getOrders = asyncHandler(async (req, res) => {
    let { pair, page = 1 } = req.query;
    let limit = 10;
    let orders = await Order.find({ pair: ObjectId(pair) }).limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

    // get total documents in the Posts collection 
    const count = await Order.countDocuments();
    // res.status(200).json(count);
    console.log(count)

    if(count > 0){
        res.status(200).json({
            orders,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } else {
        res.status(404).json({
            error: "No data found"
        })
    }
});

module.exports = { createOrder, getOrders };