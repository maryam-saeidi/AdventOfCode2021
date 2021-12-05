const readFile = require('./helpers/readFile');

const data = readFile('05.txt');

const coordinates = data
  .map(coordinate => coordinate.split(' -> ')
    .map(n => n.split(',').map(c => parseInt(c)))
  );

const max = (index) => {
  return Math.max(...coordinates
    .map(c => [c[0][index], c[1][index]])
    .reduce((a, b) => a.concat(b)))
}

const maxX = max(1) + 1;
const maxY = max(0) + 1;
const surface = new Array(maxY).fill(0).map(() => new Array(maxX).fill(0));

function isHorizontalLine(coordinate) {
  return coordinate[0][1] === coordinate[1][1];
}

function markHorizontalLine(coordinate) {
  const y = coordinate[0][1];
  const start = Math.min(coordinate[0][0], coordinate[1][0]);
  const end = Math.max(coordinate[0][0], coordinate[1][0]);
  for(let i = start; i <= end; i++) {
    surface[y][i]++;
  }
}

function isVerticalLine(coordinate) {
    return coordinate[0][0] === coordinate[1][0];
}

function markVerticalLine(coordinate) {
  const x = coordinate[0][0];
  const start = Math.min(coordinate[0][1], coordinate[1][1]);
  const end = Math.max(coordinate[0][1], coordinate[1][1]);
  for(let i = start; i <= end; i++) {
    surface[i][x]++;
  }
}

coordinates
  .map(c => {
    if (isHorizontalLine(c)) {
      markHorizontalLine(c);
    } else if (isVerticalLine(c)) {
      markVerticalLine(c)
    }
  });

// surface.map(row => {
//   console.log(row.toString());
// });

const count = surface.reduce((a,b) => a.concat(b))
  .filter(a => a >= 2)
  .length;

console.log(count);
