var player, winner
var selectPlayer = document.getElementById('selectPlayer')
var selectWinner = document.getElementById('selectWinner')

changePlayer('X')

function chooseSquare(elementId) {
  let square = document.getElementById(elementId)
  if (square.innerHTML === '-') {
    square.innerHTML = player
    square.style.color = 'green'
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
  } else {
    return
  }
  changePlayer(player)
  WinnerCheck()
}

function changePlayer(value) {
  player = value
  selectPlayer.innerHTML = player
}

function WinnerCheck() {
  var square_1 = document.getElementById(1)
  var square_2 = document.getElementById(2)
  var square_3 = document.getElementById(3)
  var square_4 = document.getElementById(4)
  var square_5 = document.getElementById(5)
  var square_6 = document.getElementById(6)
  var square_7 = document.getElementById(7)
  var square_8 = document.getElementById(8)
  var square_9 = document.getElementById(9)

  if (checkSequence(square_1, square_2, square_3)) {
    changeSquareColor(square_1, square_2, square_3)
    changeWinner(square_1)
    return;
  } 
  
  if (checkSequence(square_4, square_5, square_6)) {
    changeSquareColor(square_4, square_5, square_6)
    changeWinner(square_4)
    return;
  }
  
  if (checkSequence(square_7, square_8, square_9)) {
    changeSquareColor(square_7, square_8, square_9)
    changeWinner(square_7)
    return;
  }
  
  if (checkSequence(square_3, square_5, square_7)) {
    changeSquareColor(square_3, square_5, square_7)
    changeWinner(square_3);
    return;
  }
  
  if (checkSequence(square_1, square_5, square_9)) {
    changeSquareColor(square_1, square_5, square_9)
    changeWinner(square_1);
    return;
  }
  
  if (checkSequence(square_1, square_4, square_7)) {
    changeSquareColor(square_1, square_4, square_7)
    changeWinner(square_1);
    return;
  }
  
  if (checkSequence(square_2, square_5, square_8)) {
    changeSquareColor(square_2, square_5, square_8)
    changeWinner(square_2);
    return;
  }
  
  if (checkSequence(square_3, square_6, square_9)) {
    changeSquareColor(square_3, square_6, square_9)
    changeWinner(square_3);
    return;
  }
}

function changeSquareColor(firstSquare, secondSquare, thirdSquare) {
  firstSquare.style.backgroundColor = '#0f0'
  secondSquare.style.backgroundColor = '#0f0'
  thirdSquare.style.backgroundColor = '#0f0'
}

function changeWinner(square) {
  winner = square.innerHTML
  selectWinner.innerHTML = winner
}

function checkSequence(firstSquare, secondSquare, thirdSquare) {
  if (
    firstSquare.innerHTML !== '-' &&
    firstSquare.innerHTML === secondSquare.innerHTML &&
    secondSquare.innerHTML === thirdSquare.innerHTML
  ) {
    return true
  }
}
