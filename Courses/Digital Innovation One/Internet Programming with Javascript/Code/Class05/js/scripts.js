function mouseClick () {
  document.getElementById('thanks').innerHTML = "<i>Thanks for your click!</i>";
}

function redirect () {
  // ABRIR PÁGINA EM OUTRA ABA
  open('https://www.google.com/');

  // ABRIR PÁGINA NA MESMA ABA
  location.href = 'https://www.google.com/';
}

function changeContentEnter () {
  document.getElementById('thanks').innerHTML = 'Mouse is here!';
}