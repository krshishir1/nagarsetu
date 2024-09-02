const mongoose = require("mongoose")

const locationSchema = require("./location")
const adminSchema = require("./admin")

const citySchema = new mongoose.Schema({
    city_id: {
        type: Number,
        required: true,
        unique: true
    },
    city_name: {
        type: String,
        required: true
    },
    details: {
        state: String,
        country: String,
        population: Number,
        area: Number,
        address: String
    },
    admin: adminSchema,
    location: locationSchema
}, {
    timestamps: true
})


module.exports = mongoose.model("city", citySchema)