var player;
var selectPlayer = document.getElementById('selectPlayer');

changePlayer('X');

function chooseSquare(elementId) {
    let square = document.getElementById(elementId);
    square.innerHTML = player;
    square.style.color = 'green';
}

function changePlayer(value) {
  player = value;
  selectPlayer.innerHTML = player;
}