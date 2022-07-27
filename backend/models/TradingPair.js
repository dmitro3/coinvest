const mongoose = require('mongoose');

const TradingPairSchema = new mongoose.Schema({
    name: {
        type: String,
        require: Boolean
    },
    symbol: {
        type: String,
        require: Boolean
    },
    pair_type: {
        type: String,
        require: Boolean
    },
    token1: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Token'
    },
    token2: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Token'
    },
},{ timestamps: true });

module.exports = mongoose.model('TradingPair', TradingPairSchema);