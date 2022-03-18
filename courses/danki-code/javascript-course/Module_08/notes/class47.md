# Aula 046 - App pedra papel ou tesoura 2/3

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
    </style>
  </head>
  <body>
    <h1 style="text-align: center">Pedra Papel ou Tesoura</h1>
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
      function resetOpacityPlayer() {
        for (let i = 0; i < elementos.length; i++) {
          elementos[i].style.opacity = 0.3
        }
      }

      function resetEnemy() {
        const enemyOptions = document.querySelectorAll('.enemy-options div')
        for (let i = 0; i < enemyOptions.length; i++) {
          enemyOptions[i].childNodes[0].style.opacity = 0.3
        }
      }

      function enemyPlay() {
        // GERAR VALOR RANDOM
        let rand = Math.floor(Math.random() * 3)
        const enemyOptions = document.querySelectorAll('.enemy-options div')
        resetEnemy()
        for (let i = 0; i < enemyOptions.length; i++) {
          if (i == rand) {
            enemyOptions[i].childNodes[0].style.opacity = 1
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
          }
        }
      }

      var elementos = document.querySelectorAll('.player-options div > img')
      var playerOpt = ''
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener('click', t => {
          resetOpacityPlayer()
          t.target.style.opacity = 1
          playerOpt = t.target.getAttribute('opt')

          enemyPlay()
        })
      }

    </script>
  </body>
</html>
```