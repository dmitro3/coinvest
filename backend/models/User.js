const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    email: { 
        type: String, 
        unique: true,
        default: "" 
    },
    pic: {
        type: String,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    eth_address: {
        type: String,
        required: true,
        unique: true
    },
    nonce: {
        type: Number,
        required: true,
        unique: true,
        default: Math.floor(Math.random() * 1000000)
    }
},{ timestamps: true });

module.exports = mongoose.model('User', UserSchema);