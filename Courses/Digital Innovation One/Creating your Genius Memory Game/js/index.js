// ORDENS DO JOGO
let order = [];
let clickedOrder = [];
let score = 0;

/*
  0 - GREEN
  1 - RED
  2 - YELLOW
  3 - BLUE
*/

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    
  }
}