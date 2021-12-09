const readFile = require('./helpers/readFile');

const data = readFile('09.txt');
const area = [];
let sum = 0;

for (let i = 0; i < data.length; i++) {
  area.push(data[i].split('').map(d => parseInt(d)))
}

const getDigit = (i, j) => {
  if (i >= 0 && i < area.length
    && j >= 0 && j < area[0].length) {
    return area[i][j];
  }
  return Infinity;
}

const isLowPoint = (i, j) => {
  const currentNumber = area[i][j];
  return currentNumber < getDigit(i - 1, j)
    && currentNumber < getDigit(i + 1, j)
    && currentNumber < getDigit(i, j - 1)
    && currentNumber < getDigit(i, j + 1);
}

for (let i = 0; i < area.length; i++) {
  for (let j = 0; j < area[0].length; j++) {
    if (isLowPoint(i, j)) {
      sum += (area[i][j] + 1);
    }
  }
}

console.log(sum);
