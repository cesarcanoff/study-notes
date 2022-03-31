var player;
var selectPlayer = document.getElementById('selectPlayer');
var allSquares = document.getElementsByClassName('square');

changePlayer('X');

function chooseSquare(elementId) {
  let square = document.getElementById(elementId);
  if (square.innerHTML === '-') {
    square.innerHTML = player;
    square.style.color = 'green';
    if (player === 'X') {
      player = 'O';
    } else {
      player = 'X';
    }

    changePlayer(player);
  } else {
    return;
  }
}

function changePlayer(value) {
  player = value;
  selectPlayer.innerHTML = player;
}

function WinnerCheck () {}