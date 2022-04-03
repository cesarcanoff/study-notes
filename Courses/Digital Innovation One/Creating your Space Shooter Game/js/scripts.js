const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');
const aliensImages = ['../images/monster-1.png', '../images/monster-2.png', '../images/monster-3.png'];

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
  moveLaser(laser);
}

function createLaserElement () {
  let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
  let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
  let newLaser = document.createElement('img');
  newLaser.src = 'images/shoot.png';
  newLaser.classList.add('laser');
  newLaser.style.left = `${xPosition}px`;
  newLaser.style.top = `${yPosition - 10}px`;
  return newLaser;
}

function moveLaser (laser) {
  let laserInterval = setInterval(() => {
    let xPosition = parseInt(laser.style.left);
    

    if (xPosition === 340) {
      laser.remove();
    } else {
      laser.style.left = `${xPosition + 8}px`;
    }
  }, 10)
}

// CRIANDO ALIENS ALEATÓRIOS
function createAliens () {
  let newAlien = document.createElement('img');
  let alienSprite = aliensImages[Math.floor(Math.random() * aliensImages.length)]; // SORTEIO DE IMAGENS DE ALIENS.
  newAlien.src = alienSprite;
  newAlien.classList.add('alien');
  newAlien.classList.add('alien-transition');
  newAlien.style.left = '370px';
  newAlien.style.top = `${Math.floor(Math.random() * 330) + 30}px`;
  playArea.appendChild(newAlien);
  moveAlien(newAlien);
}

window.addEventListener('keydown', flyShip);