const StringFormater = require('./StringFormater');


// StringFormater(inputPath, outputPath, useMongo, collection)
const sf = new StringFormater('/../files/level4.txt', '/../out/teste.json', true, 'test');

sf.format();