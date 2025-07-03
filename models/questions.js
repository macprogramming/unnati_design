const mongoose = require('mongoose');

const QuestionsSchema = new mongoose.Schema({
    question : {
        type: String,
        required: true,
        unique: true
    },
    programmingLangauge: {
        type: String,
        required: true
    },
    langaugeType: {
        type: String,
        required: true
    },
    questionType: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean
    },
    example: {
        type: String
    }
});

module.exports = mongoose.model('Questions', QuestionsSchema);