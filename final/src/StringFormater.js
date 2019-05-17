const reqFile = require('./file');
const fs = require('fs');
const ms = require('./database/MongoSetup');
const mongoose = require('mongoose');
const keys = require('./database/keys.json');

class StringFormater {
    constructor(inputFile, outputFile, useMongoDB, mongoCollection) {
        this._inputFile = inputFile;
        this._outputFile = outputFile;
        this._useMongoDB = useMongoDB;
        this._dbModel = new ms(mongoCollection).model;
        if (useMongoDB) {
            this.mongoConnect();
        }
    }

    mongoConnect() {
        mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
        mongoose.Promise = global.Promise;

        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
            console.log('MongoDB Connected!');
        });
    }


    // Add to the database the obj passed
    addToDataBase(obj) {
        try {
            new this._dbModel(obj).save((err, obj) => {
                if (err) console.log(err);
                console.log(obj);
            });
        } catch (err) {
            console.log(err);
        }
    }

    format() {
        // Getting the input file
        const File = new reqFile(this._inputFile);

        // Return the formated data
        File.getCollection().then((data) => {
            data.forEach(element => {
                if (this._useMongoDB) {
                    this.addToDataBase(element);
                } else {
                    console.log(element);
                }
            });

            // For testing purposes
            let teste = JSON.stringify(data);
            fs.writeFile(__dirname + this._outputFile, teste, 'utf8', err =>
                err ? console.log(err) : console.log('Dados escritos em ' + this._outputFile));
        });
    }
}

module.exports = StringFormater;