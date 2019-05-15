const reqFile = require('./file');

const File = new reqFile('/files/level1.txt');


File.getCollection().then((data) => {
    console.log(data);
});