// Rest e Spread

// SPREAD
const persons = [
  {
    name: 'Caio'
  },

  {
    name: 'Anna'
  },

  {
    name: 'Sophie'
  },

  {
    name: 'Joe'
  }
];

const objetos = [ 
  {
    name: 'Lucas'
  }, ...persons
]

console.log(objetos);

// REST - PASSAR QUANTOS VALORES QUISER, E RETORNAR EM ARRAY.
function testes (...number) {
  console.log(number);
}

testes(1, 2, 3, 4, 5, 9,1, 2, 3, 4, 5, 9);