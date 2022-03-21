# Aula 047 - App pedra papel ou tesoura 3/3

```html
<html>
  <head>
    <title>Jogo Pedra, Papel ou Tesoura</title>
    <style>
      .player-options img,
      .enemy-options img {
        max-width: 200px;
        opacity: 0.3;
      }

      .align {
        display: flex;
        justify-content: space-between;
      }

      .player-options,
      .enemy-options {
        width: 50%;
        text-align: center;
      }

      h2.wonner {
        text-align: center;
        color: greenyellow;
      }

      /*
      TAGS CRIADAS APENAS PARA COLORIR O OUTPUT
      APENAS ESTUDOS
      MÁ PRÁTICA
      */
      blue {
        color: cyan;
      }

      red {
        color: red;
      }

      green {
        color: greenyellow;
      }
    </style>
  </head>
  <body>
    <h1 style="text-align: center">Pedra Papel ou Tesoura</h1>
    <h2 class="wonner"></h2>
    <hr />
    <div class="align">
      <div class="player-options">
        <div><img opt="rock" src="images/rock.png" /></div>
        <div><img opt="paper" src="images/paper.png" /></div>
        <div><img opt="scissor" src="images/scissor.png" /></div>
      </div>
      <div class="enemy-options">
        <div><img opt="rock" src="images/rock.png" /></div>
        <div><img opt="paper" src="images/paper.png" /></div>
        <div><img opt="scissor" src="images/scissor.png" /></div>
      </div>
    </div>
    <script>
      function validateWinner() {
        let wonner = document.querySelector('.wonner');

        if (playerOpt == 'rock') {
          if (enemyOpt == 'paper') {
            wonner.innerHTML = '<red>Máquina VENCEU!</red>';
          } else if (enemyOpt == 'rock') {
            wonner.innerHTML = '<blue>Empate</blue>';
          } else {
            wonner.innerHTML = '<green>Jogador VENCEU!</green>';
          }
        } else if (playerOpt == 'paper') {
          if (enemyOpt == 'paper') {
            wonner.innerHTML = '<blue>Empate</blue>';
          } else if (enemyOpt == 'rock') {
            wonner.innerHTML = '<green>Jogador VENCEU!</green>';
          } else {
            wonner.innerHTML = '<red>Máquina VENCEU!</red>';
          }
        } else {
          if (enemyOpt == 'paper') {
            wonner.innerHTML = '<green>Jogador VENCEU!</green>';
          } else if (enemyOpt == 'rock') {
            wonner.innerHTML = '<red>Máquina VENCEU!</red>';
          } else {
            wonner.innerHTML = '<blue>Empate</blue>';
          }
        }
      }

      function resetOpacityPlayer() {
        for (let i = 0; i < elementos.length; i++) {
          elementos[i].style.opacity = 0.3;
        }
      }

      function resetEnemy() {
        const enemyOptions = document.querySelectorAll('.enemy-options div');
        for (let i = 0; i < enemyOptions.length; i++) {
          enemyOptions[i].childNodes[0].style.opacity = 0.3;
        }
      }

      function enemyPlay() {
        // GERAR VALOR RANDOM
        let rand = Math.floor(Math.random() * 3);
        const enemyOptions = document.querySelectorAll('.enemy-options div');
        resetEnemy();
        for (let i = 0; i < enemyOptions.length; i++) {
          if (i == rand) {
            enemyOptions[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
          }
        }
      }

      var elementos = document.querySelectorAll('.player-options div > img');
      var playerOpt = '';
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener('click', t => {
          resetOpacityPlayer();
          t.target.style.opacity = 1;
          playerOpt = t.target.getAttribute('opt');
          enemyPlay();
          validateWinner();
        })
      }
    </script>
  </body>
</html>
```