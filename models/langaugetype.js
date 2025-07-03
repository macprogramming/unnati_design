const mongoose = require('mongoose');

const LanguageTypeScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
    }
});

module.exports = mongoose.model('LanguageType', LanguageTypeScheme)