const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-game');

// AÇÕES DA NAVE
function flyShip (event) {
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    moveUp();
  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    moveDown();
  } else if (event.key === " ") {
    event.preventDefault();
    fireLaser();
  }
}

// FUNÇÃO SUBIR
function moveUp() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if (topPosition === '0px') {
    return;
  } else {
    let position = parseInt(topPosition);
    position -= 50;
    yourShip.style.top = `${position}px`;
  }
}

// FUNÇÃO DESCER
function moveDown () {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if (topPosition === '520px') {
    return;
  } else {
    let position = parseInt(topPosition);
    position += 50;
    yourShip.style.top = `${position}px`;
  }
}

// FUNÇÃO TIRO
function fireLaser () {
  let laser = createLaserElement();
  playArea.appendChild(laser);
  moveLaser();
}

function createLaserElement () {
  let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
  let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
  let newLaser = document.createElement('img');
  newLaser.src = 'images/shoot.png';
  newLaser.classList.add('laser');
  newLaser.style.left = `${xPosition}px`;
  newLaser.style.left = `${yPosition - 10}px`;
  return newLaser;
}

function moveLaser () {
  
}

window.addEventListener('keydown', flyShip);