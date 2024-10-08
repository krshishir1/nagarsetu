const mongoose = require("mongoose")

const locationSchema = require("./location")
const adminSchema = require("./admin")
const departmentSchema = require("./department")

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
    location: {
        type: locationSchema,
        default: undefined
    },
    departments: {
        type: [departmentSchema],
        default: undefined
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("city", citySchema)