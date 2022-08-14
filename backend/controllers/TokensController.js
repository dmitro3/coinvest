const asyncHandler = require("express-async-handler");
const Token = require("../models/Token");

const getTokens = asyncHandler(async (req, res) => {
    const tokens = await Token.find().exec();
    res.status(200).json(tokens);
});

module.exports = { getTokens };