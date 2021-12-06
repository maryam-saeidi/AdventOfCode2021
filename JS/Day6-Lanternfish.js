const readFile = require('./helpers/readFile');

const data = readFile('06.txt');
const initialNumbers = data[0].split(',');
const days = 256;

const cacheCountResult = {};

const countNumberOfFish = (days,n) => {
  if (days < 0) return 0;

  if (n === -1) {
    if (cacheCountResult[days]) {
      return cacheCountResult[days];
    }

    const count = 1 + countNumberOfFish(days, 6) + countNumberOfFish(days, 8);
    cacheCountResult[days]  =count
    return count;
  }

  return countNumberOfFish(days - 1, n - 1);
}

let sum = initialNumbers.length;
for (let i = 0; i < initialNumbers.length; i++) {
  sum = sum + countNumberOfFish(days, initialNumbers[i])
}

console.log(sum);
