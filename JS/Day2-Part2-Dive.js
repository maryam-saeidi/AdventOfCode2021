const readFile = require('./helpers/readFile');

const data = readFile('02.txt');

let position = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i < data.length; i++) {
  const [direction, amountStr] = data[i].split(' ');
  const amount = parseInt(amountStr);

  if (direction === 'forward') {
    position = position + amount;
    depth = depth + (aim * amount);
  } else if (direction === 'down') {
    aim = aim + amount;
  } else {
    aim = aim - amount;
  }
}

console.log(position * depth);