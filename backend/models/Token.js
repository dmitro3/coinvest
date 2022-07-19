const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    name: {
        type: String,
        require: Boolean
    },
    symbol: {
        type: String,
        require: Boolean
    },
    address: {
        type: String,
        require: Boolean
    },
    icon: {
        type: String,
    },
    decimal: {
        type: Number,
    },
    priceAddress: {
        type: String,
        require: Boolean
    },
});

module.exports = mongoose.model('Token', TokenSchema);