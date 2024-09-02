const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    dept_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    assigned_username: String,
    established_date: {
        type: Date,
        default: Date.now
    },
    projects: {
        type: [String],
        default: undefined
    }
});

module.exports = departmentSchema;