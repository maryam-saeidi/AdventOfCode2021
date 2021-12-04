const readFile = require('./helpers/readFile');

const data = readFile('04.txt');

const numbers = data[0].split(',').map(n => parseInt(n));
const boards = [];
let winnerBoard = -1;
let lastNumber = -1;

for (let i = 2; i < data.length - 4; i += 6) {
  let board = [];
  for (j = 0; j < 5; j++) {
    board.push(
      data[i+j]
        .split(' ')
        .filter(a => a)
        .map(n => parseInt(n))
    );
  }
  boards.push(board);
}

function markNumber(number) {
  for (let i = 0; i < boards.length; i++) {
    let found = false;

    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        if (boards[i][j][k] === number) {
          boards[i][j][k] = -1;
          found = true;
          break;
        }
      }

      if (found) {
        break;
      }
    }
  }
}

function isThereAWinner() {
  let found = false;

  for (let i = 0; i < boards.length; i++) {
    for (let j = 0; j < 5; j++) {
      let totalMarkedInColumn = 0;
      let totalMarkedInRow = 0;
      for (let k = 0; k < 5; k++) {
        if (boards[i][k][j] === -1) {
          totalMarkedInColumn++;
        }
        if (boards[i][j][k] === -1) {
          totalMarkedInRow++;
        }
      }
      if (totalMarkedInColumn === 5 || totalMarkedInRow === 5) {
        found = true;
        winnerBoard = i;
      }

      if (found) {
        break;
      }
    }

    if (found) {
      break;
    }
  }

  return found;
}

function sumUnmarkedNumbers(board) {
  return board.reduce((firstRow, secondRow) => firstRow.concat(secondRow))
    .filter(n => n !== -1)
    .reduce((a, b) => a + b)
}

for (let i = 0; i < numbers.length; i++) {
  markNumber(numbers[i]);
  if (isThereAWinner()) {
    lastNumber = numbers[i];
    break;
  }
}

const sum = sumUnmarkedNumbers(boards[winnerBoard]);
console.log('Sum:', sum);
console.log('lastNumber:', lastNumber);

console.log(sum * lastNumber);