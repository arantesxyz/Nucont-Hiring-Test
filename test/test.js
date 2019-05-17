const reqFile = require('../src/file');

// Getting the input file
const File = new reqFile('/../files/level3.txt');

// Return the formated data
File.getCollection().then((data) => {
    console.log(data.length);
});