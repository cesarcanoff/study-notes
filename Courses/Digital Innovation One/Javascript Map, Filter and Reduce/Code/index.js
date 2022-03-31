/*
  Map
  Pratique a sintaxe de multiplicação de números, uma vez utilizando o
  parâmetro this de um objeto criado por você, e depois sem ele.

  Filter
    Filtre e retorne todos os números pares de um array.

  Reduce
    Some todos os números de um array
    Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

// MAP
const maca = {
  value: 5
}

const laranja = {
  value: 5
}


function mapWithThis(arr, thisArg) {
  return arr.map(function(item) {
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2];

console.log('This -> maçã', mapWithThis(nums, maca));
console.log('This -> laranja', mapWithThis(nums, laranja));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mapWithoutThis (arr) {
  return arr.map((item) => {
    return item * 2;
  })
}

console.log(mapWithoutThis(nums2));
// --------------------------------------

// FILTER
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterNums(arr) {
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 !== 0; // ÍMPAR OU PAR (===)
}

console.log(filterNums(arr3));
// ---------------------------------------

// REDUCE

function somaNumeros(arr) {
  return arr.reduce((prev, current) => {
    console.log({prev});
    console.log({current})
    return prev + current
  });
}

const arr0 = [5, 5, 5];

console.log(somaNumeros(arr0))


const list = [
  {
    name: 'Sugar',
    price: 12.78
  },

  {
    name: 'Rice',
    price: 15
  },

  {
    name: 'Bread',
    price: 6.00
  },

  {
    name: 'Apple',
    price: 5.50
  }
];

const saldoDisponivel = 100;

function calcSaldo(saldoDisponivel, list) {
  return list.reduce(function (prev, current) {
    return prev - current.price;
  }, saldoDisponivel)
}

console.log(calcSaldo(saldoDisponivel, list))