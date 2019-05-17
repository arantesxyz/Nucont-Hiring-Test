const reqFile = require('./file');
const fs = require('fs');

const File = new reqFile('/files/level4.txt');


File.getCollection().then((data) => {

    console.log(data);

    //For testing purposes
    let teste = JSON.stringify(data);
    let filePath = 'out/teste.json';
    fs.writeFile(filePath, teste, 'utf8', err => 
    err ? console.log(err) : console.log('Dados escritos em ' + filePath));
});