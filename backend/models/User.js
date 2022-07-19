const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    eth_address: {
        type: String
    },
});

module.exports = mongoose.model('User', UserSchema);