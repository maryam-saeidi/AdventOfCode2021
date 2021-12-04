const readFile = require('./helpers/readFile');

const data = readFile('04.txt');

const numbers = data[0].split(',').map(n => parseInt(n));
const boards = [];
let loserBoard = -1;
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

function isBoardWinner(board) {
  for (let j = 0; j < 5; j++) {
    let totalMarkedInColumn = 0;
    let totalMarkedInRow = 0;

    for (let k = 0; k < 5; k++) {
      if (board[k][j] === -1) {
        totalMarkedInColumn++;
      }
      if (board[j][k] === -1) {
        totalMarkedInRow++;
      }
    }

    if (totalMarkedInColumn === 5 || totalMarkedInRow === 5) {
      return true;
    }
  }
  return false
}

function areAllMinusOneWinners() {
  let winners = new Array(boards.length);
  for (let i = 0; i < boards.length; i++) {
    if (isBoardWinner(boards[i])) {
      winners[i] = true;
    }
  }

  if (winners.filter(n => n).length === boards.length - 1) {
    loserBoard = winners.findIndex(item => item !== true);
    return true;
  }

  return false;
}

function sumUnmarkedNumbers(board) {
  return board.reduce((firstRow, secondRow) => firstRow.concat(secondRow))
    .filter(n => n !== -1)
    .reduce((a, b) => a + b)
}

let numbersIndex = 0;
for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex++) {
  markNumber(numbers[numbersIndex]);
  if (areAllMinusOneWinners()) {
    break;
  }
}

while(!isBoardWinner(boards[loserBoard])) {
  numbersIndex++;
  markNumber(numbers[numbersIndex]);
}

lastNumber = numbers[numbersIndex];
const sum = sumUnmarkedNumbers(boards[loserBoard]);
console.log('Sum:', sum);
console.log('lastNumber:', lastNumber);

console.log(sum * lastNumber);