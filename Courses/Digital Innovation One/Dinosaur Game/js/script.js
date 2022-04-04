const dino = document.querySelector('dino');

function handleKeyUp (event) {
  if (event.keyCode === 32) {
    console.log('SPACE DUDE!');
  }
}

document.addEventListener('keyup', handleKeyUp());