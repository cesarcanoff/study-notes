const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJump = false;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJump) {
      jump();
    }
  }
}

function jump() {
  let position = 0
  isJump = true;
  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (position <= 20 ) {
          clearInterval(downInterval);
          isJump = false;
        } else {
          position -= 20;
          dino.style.bottom = `${position}px`
        }
      }, 20);
    } else {
      position += 20
      dino.style.bottom = `${position}px`
    }
  }, 20)
}

function createCactus () {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;

  cactus.classList.add('cactus');
  cactus.style.left = `${1000}px`;
  background.appendChild(cactus);
}


createCactus();
document.addEventListener('keyup', handleKeyUp)