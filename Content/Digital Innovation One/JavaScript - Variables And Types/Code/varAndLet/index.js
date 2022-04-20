let numberOne;
numberOne = 1;
console.log(numberOne + 3);

var firstName = 'César [GLOBAL]';
let lastName = 'Julio [LOCAL]'

if (firstName === 'César') {
  var firstName = 'Pedro [GLOBAL]';
  let lastName = 'Canoff [LOCAL]';
}

console.log(firstName, lastName);