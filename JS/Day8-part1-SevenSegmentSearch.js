const readFile = require('./helpers/readFile');

const data = readFile('08.txt');

let sum = 0;
// [2, 3, 4, 7]
const isUnigueDigit = [false, false, true, true, true, false, false, true, false, false]
for (let i = 0; i < data.length; i++) {
  const numbers = data[i].split(' | ')[1].split(' ');
  for (let j = 0; j < numbers.length; j++) {
    const uniqueLetters = new Set(numbers[j]).size;
    if (isUnigueDigit[uniqueLetters]) {
      sum++;
    }
  }
}

console.log(sum);
