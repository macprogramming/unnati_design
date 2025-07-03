const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category_id: {
        type: Number,
        unique: true
    },
    categoryname: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('categories', categorySchema)
