const mongoose = require("mongoose")

const locationSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true,
        min: -90,
        max: 90
    },
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
    radius: {
        type: Number,
        min: 0
    }
})

module.exports = locationSchema