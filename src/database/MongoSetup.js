const mongoose = require('mongoose');

class MongoSetup {
    constructor(collection){
        this._collection = collection;

        this.dataSchema = new mongoose.Schema({
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
    }

    get model() {
        return mongoose.model(this._collection, this.dataSchema);
    }

}
module.exports = MongoSetup;