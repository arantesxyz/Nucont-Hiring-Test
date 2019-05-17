const reqFile = require('./file');
const fs = require('fs');
const mongoose = require('mongoose');
const dbModel = require('./database/MongoSetup');
const keys = require('./database/keys.json');

// Mongo DB
mongoose.connect(`mongodb+srv://${keys.username}:${keys.password}@nucont-ht-ratin.mongodb.net/test?retryWrites=true`, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('MongoDB Connected!');
});

// Getting the input file
const File = new reqFile('/../files/level3.txt');

// Return the formated data
File.getCollection().then((data) => {
    data.forEach(addToDataBase);

    // For testing purposes
    let teste = JSON.stringify(data);
    let filePath = '/../out/teste.json';
    fs.writeFile(__dirname + filePath, teste, 'utf8', err =>
        err ? console.log(err) : console.log('Dados escritos em ' + filePath));
});


// Add to the database the obj passed
function addToDataBase(obj) {
    try {
        new dbModel(obj).save((err, obj) => {
            if (err) console.log(err);
            console.log(obj);
        });
    }catch (err){
        console.log(err);
    }
}