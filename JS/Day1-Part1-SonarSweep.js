const readFile = require('./helpers/readFile');

const data = readFile('01.txt');

let measure = 0;
for (let i = 0; i < data.length - 1; i++) {
  if (data[i] < data[i + 1]) {
    measure++;
  }
}

console.log(measure);