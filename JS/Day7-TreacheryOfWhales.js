const readFile = require('./helpers/readFile');

const data = readFile('07.txt');
const initialPositions = data[0].split(',');
const maxPosition = Math.max(...initialPositions);

let leastFuel = Infinity;

for (let i = 0; i <= maxPosition; i++) {
  let sum = 0;
  for (let j = 0; j < initialPositions.length; j++) {
    const diff = Math.abs(i - initialPositions[j]);
    sum += (diff * (diff + 1))/2;
  }

  if (sum < leastFuel) {
    leastFuel = sum;
  }
}

console.log(leastFuel);
