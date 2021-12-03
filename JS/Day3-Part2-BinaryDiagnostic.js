const readFile = require('./helpers/readFile');

const data = readFile('03.txt');

let oxygenMatch = '';
let co2Match = '';

let oxygenGeneratorRating = new Array(...data);
let co2ScrubberRating = new Array(...data);

for (let i = 0; i < data[0].length; i++) {
  getNumberOfZeroAndOne = (array) => {
    let numberOfZeros = 0;
    let numberOfOnes = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[j].charAt(i) === '0') {
        numberOfZeros = numberOfZeros + 1;
      } else {
        numberOfOnes = numberOfOnes + 1;
      }
    }

    return [numberOfOnes, numberOfZeros];
  }

  if (oxygenGeneratorRating.length > 1) {
    const [oxygenOnes, oxygenZeros] = getNumberOfZeroAndOne(oxygenGeneratorRating);
    if (oxygenOnes >= oxygenZeros) {
      oxygenMatch = oxygenMatch + '1';
    } else {
      oxygenMatch = oxygenMatch + '0';
    }

    oxygenGeneratorRating = oxygenGeneratorRating.filter(item => item.startsWith(oxygenMatch));
  }

  if (co2ScrubberRating.length > 1) {
    const [ones, zeros] = getNumberOfZeroAndOne(co2ScrubberRating);
    if (ones >= zeros) {
      co2Match = co2Match + '0';
    } else {
      co2Match = co2Match + '1';
    }

    co2ScrubberRating = co2ScrubberRating.filter(item => item.startsWith(co2Match));
  }
}

console.log(parseInt( oxygenGeneratorRating[0], 2 ) * parseInt( co2ScrubberRating[0], 2 ));