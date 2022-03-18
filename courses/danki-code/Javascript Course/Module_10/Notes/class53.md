# Aula 052 - App Perguntas e Respostas 2/3

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
        <span>DIO</span>
        <input type="radio" name="pergunta_1" value="correta" />
        <br />
        <span>Danki Code</span>
        <input type="radio" name="pergunta_1" value="incorreta" />
        <br />
        <span>Rocketseat</span>
        <input type="radio" name="pergunta_1" value="incorreta" />
      </form>
    </div>
    <div class="title">
      <h1>How is the best programming website?</h1>
      <form action="" class="pergunta">
        <span>DIO</span>
        <input type="radio" name="pergunta_2" value="incorreta" />
        <br />
        <span>Danki Code</span>
        <input type="radio" name="pergunta_2" value="incorreta" />
        <br />
        <span>Rocketseat</span>
        <input type="radio" name="pergunta_2" value="correta" />
      </form>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>
```

```jsx
var elementos = document.querySelectorAll('[type=radio]');
for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('change', (e) => {
    let marcado = e.target.value;
    if (marcado == "correta") {
      let el = e.target.previousElementSibling.style.backgroundColor = 'green';
    } else if (marcado == "incorreta") {
      let el = e.target.previousElementSibling.style.backgroundColor = 'red';
      console.log('ERROU')
    }
  })
}
```