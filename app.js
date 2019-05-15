const reqFile = require('./file');

const File = new reqFile('/files/level1.txt');

const arr = [];
var parent = null;

File.getLines().then((data) => {
    data.forEach(e => {
        if (parent != null && e[0].split('')[0] != parent.split('')[0]){
            parent = null;
        }

        arr.push({
            description: e[1],                 // string
            classifier: e[0],                  // string
            openingBalance: parseFloat(e[2]),  // number
            debit: parseFloat(e[3]),           // number
            credit: parseFloat(e[4]),          // number
            finalBalance: parseFloat(e[5]),    // number
            parent: parent                     // null || string
        });
        parent = e[0];
    });
    console.log(arr);
});