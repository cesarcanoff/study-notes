// ORDENS DO JOGO
let order = [];
let clickedOrder = [];
let score = 0;

// 0 - GREEN 1 - RED 2 - YELLOW 3 - BLUE

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');


// CRIA ORDEM ALEATÓRIA DE CORES
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, (Number(i) + 1));
  }
}

// ACENDE A PRÓXIMA COR
let lightColor = (element, number) => {
  number *= 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  }, number - 250);
}

// VERIFICA SE OS BOTÕES CLICADOS ESTÃO EM ORDEM CORRETA
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] !== order[i]) {
      lose();
      break;
    }
  }

  if (checkOrder.length == order.length) {
    alert(`Score ${score}\nVocê acertou! Iniciando próximo nível...`);
    nextLevel();
  }
}

// CLIQUE DO USUÁRIO
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);

}


// CRIAR FUNÇÃO QUE RETORNA A COR
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
}

// FUNÇÃO PARA PRÓXIMO NIVEL
let nextLevel = () => {
  score++;
  shuffleOrder();
}

let gameOver = () => {
  alert(`Pontuação ${acore}\nVocê perdeu o jogo\nCLique em OK Para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {
  alert("Bem-vindo ao Genius! Iniciando um novo jogo.")
  score = 0;

  nextLevel();
}

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

playGame();