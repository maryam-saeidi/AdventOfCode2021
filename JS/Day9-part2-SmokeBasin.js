const readFile = require('./helpers/readFile');

const data = readFile('09-sample.txt');
const area = [];
let basinSizes = [];
let maxMult = 1;

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

const basinSize = (i, j) => {
  const currentNumber = getDigit(i, j);
  if (currentNumber === 9 || currentNumber === Infinity) {
    return 0;
  }

  area[i][j] = Infinity;
  return 1 + basinSize(i - 1, j) + basinSize(i + 1, j) + basinSize(i, j - 1) + basinSize(i, j + 1);
}

for (let i = 0; i < area.length; i++) {
  for (let j = 0; j < area[0].length; j++) {
    if (isLowPoint(i, j)) {
      basinSizes.push(basinSize(i, j));
    }
  }
}

for (let i = 0; i < 3; i++) {
  const max = Math.max(...basinSizes);
  maxMult *= max;
  basinSizes.splice(basinSizes.indexOf(max), 1);
}

console.log(maxMult);
