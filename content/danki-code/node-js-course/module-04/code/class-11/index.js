const fs = require('fs');

fs.readFile('names.txt', (err, data) => {
  let word = data.toString();

  // let newStr = string.split('/');

  let newStr = word.substring(0, 5);
  console.log(newStr);
});