const mongoose = require("mongoose");
const { hashPassword } = require("../utils/passwordManagement");

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

adminSchema.pre('save', async function (next) {
    this.password = await hashPassword(this.password);
    next()
})

module.exports = adminSchema;