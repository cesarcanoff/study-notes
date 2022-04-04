function start() {
  $('#inicio').hide()
  $('#fundoGame').append("<div class='anima1' id='jogador'></div>")
  $('#fundoGame').append("<div class='anima2' id='inimigo1'></div>")
  $('#fundoGame').append("<div id='inimigo2'></div>")
  $('#fundoGame').append("<div class='anima3' id='amigo'></div>")
}

var jogo = {}

jogo.timer = setInterval(loop, 30)

function loop() {
  movefundo()
}

function movefundo() {
  esquerda = parseInt($('#fundoGame').css('background-position'))
  $('#fundoGame').css('background-position', esquerda - 1)
}

var TECLA = {
  W: 87,
  S: 83,
  D: 68
}

jogo.pressionou = []

$(document).keydown(function (e) {
  jogo.pressionou[e.which] = true
})

$(document).keyup(function (e) {
  jogo.pressionou[e.which] = false
})

movejogador()

function movejogador() {
  if (jogo.pressionou[TECLA.W]) {
    var topo = parseInt($('#jogador').css('top'))
    $('#jogador').css('top', topo - 10)
  }

  if (jogo.pressionou[TECLA.S]) {
    var topo = parseInt($('#jogador').css('top'))
    $('#jogador').css('top', topo + 10)
  }

  if (jogo.pressionou[TECLA.D]) {
    //Chama função Disparo
  }
}

if (topo <= 0) {
  $('#jogador').css('top', topo + 10)
}

if (topo >= 434) {
  $('#jogador').css('top', topo - 10)
}

var velocidade = 5
var posicaoY = parseInt(Math.random() * 334)

moveinimigo1()

function moveinimigo1() {
  posicaoX = parseInt($('#inimigo1').css('left'))
  $('#inimigo1').css('left', posicaoX - velocidade)
  $('#inimigo1').css('top', posicaoY)

  if (posicaoX <= 0) {
    posicaoY = parseInt(Math.random() * 334)
    $('#inimigo1').css('left', 694)
    $('#inimigo1').css('top', posicaoY)
  }
}

moveinimigo2()

function moveinimigo2() {
  posicaoX = parseInt($('#inimigo2').css('left'))
  $('#inimigo2').css('left', posicaoX - 3)

  if (posicaoX <= 0) {
    $('#inimigo2').css('left', 775)
  }
}

moveamigo()

function moveamigo() {
  posicaoX = parseInt($('#amigo').css('left'))
  $('#amigo').css('left', posicaoX + 1)

  if (posicaoX > 906) {
    $('#amigo').css('left', 0)
  }
}

var podeAtirar = true
disparo()

function disparo() {
  if (podeAtirar == true) {
    podeAtirar = false

    topo = parseInt($('#jogador').css('top'))
    posicaoX = parseInt($('#jogador').css('left'))
    tiroX = posicaoX + 190
    topoTiro = topo + 37
    $('#fundoGame').append("<div id='disparo'></div")
    $('#disparo').css('top', topoTiro)
    $('#disparo').css('left', tiroX)

    var tempoDisparo = window.setInterval(executaDisparo, 30)
  }

  function executaDisparo() {
    posicaoX = parseInt($('#disparo').css('left'))
    $('#disparo').css('left', posicaoX + 15)

    if (posicaoX > 900) {
      window.clearInterval(tempoDisparo)
      tempoDisparo = null
      $('#disparo').remove()
      podeAtirar = true
    }
  }
}
