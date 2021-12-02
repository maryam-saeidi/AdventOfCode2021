const readFile = require('./helpers/readFile');

const data = readFile('02.txt');

let position = 0;
let depth = 0;

for (let i = 0; i < data.length; i++) {
  const [direction, amountStr] = data[i].split(' ');
  const amount = parseInt(amountStr);

  if (direction === 'forward') {
    position = position + amount;
  } else if (direction === 'down') {
    depth = depth + amount;
  } else {
    depth = depth - amount;
  }
}

console.log(position * depth);