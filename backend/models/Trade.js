const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
    orders: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Order',
    }],
    price: {
        type: Number,
        require: true,
    },

},{ timestamps: true });

module.exports = mongoose.model('Order', TradeSchema);