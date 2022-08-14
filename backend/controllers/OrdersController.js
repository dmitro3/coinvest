const asyncHandler = require("express-async-handler");
const Order = require("../models/Order");
const generateToken = require("../config/generateToken");
const { ObjectId } = require('mongodb');
const TradingPair = require("../models/TradingPair");
const pairs = require("../data/TradingPairs");
const Token = require("../models/Token");

const createOrder = asyncHandler(async (req, res) => {
    const { user, pair, order_type, price, quantity } = req.body;

    if(!user || !pair || !order_type || !price || !quantity){
        res.status(400);
        // throw new Error("Please enter all required fields");
        res.json({error: "Please enter all required fields"});
    }

    // let orderExist = await Order.findOne({ user: user,  })
    console.log({ user, pair, order_type, price, quantity })
    const order = await Order.create({
        user: ObjectId(user),
        pair: ObjectId(pair),
        order_type,
        price,
        quantity
    });
    await order.populate("user")
    await order.populate({
        path: "pair",
        populate: {
            path: "token1"
        }
    })
    await order.populate({
        path: "pair",
        populate: {
            path: "token2"
        }
    })

    res.status(201).json(order);
});

const getOrders = asyncHandler(async (req, res) => {
    let { page = 1 } = req.query;
    let limit = 10;
    // pair: ObjectId(pair)
    let orders = await Order.find(req.query).populate({
        path: "pair",
        populate: {
            path: "token1"
        }
    }).populate({
        path: "pair",
        populate: {
            path: "token2"
        }
    }).populate("user").limit(limit * 1)
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

const getOrderBook = asyncHandler(async (req, res) => {

    let limit = 10;
    // pair: ObjectId(pair)
    let orders = await Order.aggregate(
        [
          // First Stage
          {
            $group :
              {
                _id : "$item",
                totalSaleAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } }
              }
           },
           // Second Stage
           {
             $match: { "totalSaleAmount": { $gte: 100 } }
           }
         ]
       )

    // get total documents in the Posts collection 
    const count = await Order.countDocuments();
    // res.status(200).json(count);
    console.log(count)

    if(count > 0){
        res.status(200).json({
            orders,
            // totalPages: Math.ceil(count / limit),
            // currentPage: page
        });
    } else {
        res.status(404).json({
            error: "No data found"
        })
    }
});

const getUserOrders = asyncHandler(async (req, res) => {
    let { user, page = 1, status = '' } = req.query;

    let limit = 10;
    let orders = await Order.find({ user: ObjectId(user), status: status }).populate({
        path: "pair",
        populate: {
            path: "token1"
        }
    }).populate({
        path: "pair",
        populate: {
            path: "token2"
        }
    }).populate("user").limit(limit * 1)
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

const createPairs = asyncHandler(async (req, res) => {
    const Pairs = await TradingPair.insertMany(pairs);
    console.log(Pairs)
    res.status(201).json(Pairs)
})

const getPairs = asyncHandler(async (req, res) => {
    const Pairs = await TradingPair.find().populate("token1").populate("token2").exec();
    console.log(Pairs)
    res.status(201).json(Pairs)
})

module.exports = { createOrder, getOrders, createPairs, getPairs, getUserOrders, getOrderBook };