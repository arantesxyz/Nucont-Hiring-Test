const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    classifier: {
        type: String,
        require: false
    },
    description: {
        type: String,
        required: false
    },
    openingBalance: {
        type: Number,
        required: false
    },
    debit: {
        type: Number,
        required: false
    },
    credit: {
        type: Number,
        required: false
    },
    finalBalance: {
        type: Number,
        required: false
    },
    parent: {
        type: String,
        required: false
    },
    access: {
        type: String,
        required: false
    }
});

const dbModel = mongoose.model('level3', dataSchema);
module.exports = dbModel;