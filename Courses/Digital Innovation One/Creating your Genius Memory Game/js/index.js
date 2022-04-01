// ORDENS DO JOGO
let order = [];
let clickedOrder = [];
let score = 0;

// 0 - GREEN 1 - RED 2 - YELLOW 3 - BLUE

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, (Number(i) + 1));
  }
}

let lightColor = (element, number) => {
  number *= 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  }, number - 250);
}