const fs = require('fs');

function readFile(filename){
  return fs.readFileSync(__dirname + '/../data/' + filename).toString().split('\n');
}

module.exports = readFile;
