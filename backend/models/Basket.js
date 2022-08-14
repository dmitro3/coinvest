const mongoose = require("mongoose");

const BasketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    tokens: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Token',
        required: true
    }],
    is_public: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Basket", BasketSchema);