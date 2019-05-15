const fs = require('fs');
const readLine = require('readline');

class File {
    constructor(path) {
        this._path = path;
    }

    getCollection() {
        return new Promise(res => {
            let arr = [];
            let parent = null;

            this.getLines().then((data) => {
                data.forEach(e => {
                    if (parent != null && e[0].split('')[0] != parent.split('')[0]) {
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
                res(arr);
            });
        });
    }

    getLines() {
        return new Promise(res => {
            let arr = [];
            let rd = readLine.createInterface({
                input: fs.createReadStream(__dirname + this._path)
            });

            rd.on('line', (line) => {
                let obj = this.filterDescription(this.removeSpacing(line));
                if (obj != ''){ // Avoid pushing empty arrays
                    arr.push(obj);
                }
            });

            rd.on('pause', () => {
                res(arr);
            });
        });
    }

    removeSpacing(str) {
        let newStr = String(str.split('\t').join(' ')).split('.').join('').split(',').join('.');
        let arr = newStr.split(' ').filter(a => a);

        for (let i = 0; i < arr.length; i++) {
            arr.splice(i, 1, arr[i].trimLeft());
        }

        return arr;
    }

    filterDescription(data) {
        let arr = [];
        let str = '';
        let isOver = false;
        for (let i = 0; i < data.length; i++) {
            if (!parseFloat(data[i]) && !isOver) {
                if (str != '') {
                    str += ' ';
                }
                str += data[i];
            } else {
                arr.push(data[i]);
            }
            if (parseFloat(data[i + 1])) {
                isOver = true;
            }
        }
        arr.splice(1, 0, str);
        return arr;
    }
}

module.exports = File;