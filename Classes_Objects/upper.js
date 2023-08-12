const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertToCase(inputString) {
  console.log('Lowercase:', inputString.toLowerCase());
  console.log('Uppercase:', inputString.toUpperCase());
}

rl.question('Enter a string: ', (inputString) => {
  convertToCase(inputString);
  rl.close();
});
