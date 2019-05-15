const fs = require('fs');
const readLine = require('readline');

class File {
    constructor(path) {
        this._path = path;
    }

    getLines() {
        return new Promise((res) => {
            let arr = [];
            let rd = readLine.createInterface({
                input: fs.createReadStream(__dirname + this._path)
            });

            rd.on('line', (line) => {
                arr.push(this.filterDescription(this.removeSpacing(line)));
            });

            rd.on('pause', () => {
                res(arr);
              });
        });
    }

    removeSpacing(str) {
        return str.split(' ').filter(a => a);
    }

    filterDescription(data) {
        let arr = [];
        let str = '';
        let isOver = false;
        for (let i = 0; i < data.length; i++) {
            if (!parseFloat(data[i]) && !isOver) {
                if (str != ''){
                    str += ' ';
                }
                str += data[i];
            }else{
                arr.push(data[i]);
            }
            
            if (parseFloat(data[i+1])){
                isOver = true;
            }
        }
        arr.splice(1, 0, str);
        return arr;
    }
}

module.exports = File;