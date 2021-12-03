const readFile = require('./helpers/readFile');

const data = readFile('03.txt');

let gammaRate = '';
let epsilonRate = '';

for (let i = 0; i < data[0].length; i++) {
  let numberOfZeros = 0;
  let numberOfOnes = 0;

  for (let j = 0; j < data.length; j++) {
    if (data[j].charAt(i) === '0') {
      numberOfZeros = numberOfZeros + 1;
    } else {
      numberOfOnes = numberOfOnes + 1;
    }
  }

  if (numberOfOnes > numberOfZeros) {
    gammaRate = gammaRate + '1';
    epsilonRate = epsilonRate + '0';
  } else {
    gammaRate = gammaRate + '0';
    epsilonRate = epsilonRate + '1';
  }
}

console.log(parseInt( gammaRate, 2 ) * parseInt( epsilonRate, 2 ));
