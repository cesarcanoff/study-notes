# Aula 053 - App Perguntas e Respostas 3/3

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Perguntas e Respostas</title>
  </head>
  <body>
    <div class="title">
      <h1>How is the best programming website?</h1>
      <form class="pergunta">
        <div class="resposta">
          <span>DIO</span>
          <input type="radio" name="pergunta_1" value="correta" />
        </div>

        <div class="resposta">
          <span>Danki Code</span>
          <input type="radio" name="pergunta_1" value="incorreta" />
        </div>

        <div class="resposta">
          <span>Rocketseat</span>
          <input type="radio" name="pergunta_1" value="incorreta" />
        </div>
      </form>
    </div>
    <div class="title">
      <h1>How is the best programming website?</h1>
      <form class="pergunta">
        <div class="resposta">
          <span>DIO</span>
          <input type="radio" name="pergunta_1" value="incorreta" />
        </div>

        <div class="resposta">
          <span>Danki Code</span>
          <input type="radio" name="pergunta_1" value="incorreta" />
        </div>

        <div class="resposta">
          <span>Rocketseat</span>
          <input type="radio" name="pergunta_1" value="correta" />
        </div>
      </form>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>
```

```jsx
var elementos = document.querySelectorAll('[type=radio]');
for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('change', e => {
    let marcado = e.target.value;
    if (marcado == 'correta') {
      let parentNode = e.target.parentNode;
      parentNode.style.backgroundColor = 'green';

      let els = parentNode.parentNode.querySelectorAll('[type=radio]');

      for (let j = 0; j < els.length; j++) {
        els[j].disabled = true;
      }
    } else if (marcado == 'incorreta') {
      let parentNode = e.target.parentNode;
      parentNode.style.backgroundColor = 'red';

      let els = parentNode.parentNode.querySelectorAll('[type=radio]');

      for (let j = 0; j < els.length; j++) {
        els[j].disabled = true;
      }

      let correta = parentNode.parentNode.querySelector('[value=correta]');
      correta.parentNode.style.backgroundColor = 'green';
    }
  })
}
```