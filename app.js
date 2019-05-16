const reqFile = require('./file');
const fs = require('fs');

const File = new reqFile('/files/level2.txt');


File.getCollection().then((data) => {

    console.log(data);

    //For testing purposes
    let teste = JSON.stringify(data);
    fs.writeFile('out/teste.json', teste, 'utf8', err => 
    err ? console.log(err) : console.log('Dados escritos em "out/teste.json"'));
});