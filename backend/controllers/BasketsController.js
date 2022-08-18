const asyncHandler = require("express-async-handler");
const Basket = require("../models/Basket");
const { ObjectId } = require('mongodb');

const getBaskets = asyncHandler(async (req, res) => {
    let { user, basket, page = 1 } = req.query;
    let query = {};
    if(user){
        query.user = ObjectId(user)
    }
    if(basket){
        query._id = ObjectId(basket)
    }
    let limit = 10;
    // pair: ObjectId(pair)
    let baskets = await Basket.find(query).populate("tokens").populate("user").limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

    // get total documents in the Posts collection 
    const count = await Basket.countDocuments();
    // res.status(200).json(count);
    console.log(count)

    if(count > 0){
        res.status(200).json({
            baskets,
            showing: baskets.length,
            total: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } else {
        res.status(404).json({
            error: "No data found"
        })
    }
});

const createBasket = asyncHandler(async (req, res) => {

    const { name, description, user, tokens, is_public } = req.body;
    if(!user || !name || !tokens){
        res.status(400);
        // throw new Error("Please enter all required fields");
        res.json({error: "Please enter all required fields"});
    }

    let tokensArr = [];
    tokens.forEach((item, index) => {
        tokensArr.push(ObjectId(item));
    })

    const basket = await Basket.create({
        name: name,
        description: description,
        user: ObjectId(user),
        tokens: tokensArr
    })
    await basket.populate("user")
    await basket.populate("tokens")

    res.status(201).json(basket);

});

const updateBasket = asyncHandler(async (req, res) => {
    const { basket } = req.params;
    const { tokens } = req.body;

    let query = {};
    if(tokens){
        let tokensArr = [];
        tokens.forEach((item, index) => {
            tokensArr.push(ObjectId(item));
        })
        req.body.tokens = tokensArr;
    }
    // if(name) {
    //     query.name = name;
    // }
    // if(description) {
    //     query.description = description;
    // }
    const fetchedBasket = await Basket.findOneAndUpdate(
        { _id: basket },
        { $set: req.body }
    ).exec();
    console.log(fetchedBasket);
    fetchedBasket.update()
    await fetchedBasket.populate("user")
    await fetchedBasket.populate("tokens")
    res.status(200).json({ message: "Updated Successfully!", basket: fetchedBasket});
});

const deleteBasket = asyncHandler(async (req, res) => {
    
});

module.exports = { getBaskets, createBasket, updateBasket, deleteBasket };