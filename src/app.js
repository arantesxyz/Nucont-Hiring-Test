const reqFile = require('./file');
const fs = require('fs');
const mongoose = require('mongoose');
const db = require('./database/MongoSetup');
const keys = require('./database/keys.json');

mongoose.connect(`mongodb+srv://${keys.username}:${keys.password}@nucont-ht-ratin.mongodb.net/test?retryWrites=true`);
mongoose.Promise = global.Promise;


const File = new reqFile('/../files/level4.txt');
File.getCollection().then((data) => {
    console.log(data[1]);

    //For testing purposes
    let teste = JSON.stringify(data);
    let filePath = '../out/teste.json';
    fs.writeFile(filePath, teste, 'utf8', err =>
        err ? console.log(err) : console.log('Dados escritos em ' + filePath));
});


// call it
function addToDataBase(obj) {
    try {
        let data = db.create(obj);
        console.log(data);
    }catch (err){
        console.log(err);
    }
}