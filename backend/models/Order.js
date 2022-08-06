const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    pair: {
        type: mongoose.Schema.Types.ObjectId, ref: 'TradingPair',
    },
    order_type: {
        type: String, // Buy, Sell
        require: true
    },
    price: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    status:{
        type: String,
        required: true,
        default: 'open'
    }
},{ timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);