const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date_joined: {
        type: Date,
        default: Date.now
    }
});

module.exports = adminSchema;