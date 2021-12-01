const readFile = require('./helpers/readFile');

const data = readFile('01.txt');

let measure = 0;
let previousWindow = data[0] + data[1] + data[2];

for (let i = 1; i < data.length - 2; i++) {
  const currentWindow = data[i] + data[i + 1] + data[i + 2];
  if (previousWindow < currentWindow) {
    measure++;
  }
  previousWindow = currentWindow;
}

console.log(measure);