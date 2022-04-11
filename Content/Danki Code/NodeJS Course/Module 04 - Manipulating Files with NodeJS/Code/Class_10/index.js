const fs = require('fs');

fs.readFile('names.txt', (err, data) => {
  console.log(data.toString());
});