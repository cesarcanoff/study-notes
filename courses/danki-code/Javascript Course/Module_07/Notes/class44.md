# Aula 043 - App Lista de Supermercado 2/3

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Aplicação Supermercado</title>
  </head>
  <body>
    <header>
      <h2>App Supermarket List</h2>
    </header>
    <div class="lista-cadastro">
      <input type="text" name="nome_produto" placeholder="Nome do Produto:" />
      <input type="number" name="preco_produto" placeholder="Preço do Produto:" />
      <input type="submit" name="acao" value="Cadastrar" />
    </div>

    <div class="lista-produtos">
      <div class="lista-produto-single">
        <h3>Redbull</h3>
        <h3 class="price-produto"><span>R$23.90</span></h3>
      </div>
    </div>
    <div class="soma-produto">
      <h1>Total: R$0.00</h1>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  padding: 10px;
}

header {
  background-color: #5a71bb;
  text-align: center;
  color: white;
  padding: 20px 0;
}

.lista-cadastro {
  display: flex;
  margin: 20px 0;
}

.lista-cadastro input[type='text'],
input[type='number'] {
  flex: 1;
  height: 40px;
  padding-left: 20px;
}

.lista-produto-single {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
}

.lista-produto-single h3 {
  flex: 1;
  padding: 0 20px;
}

h3.price-produto {
  text-align: right;
  font-size: 14px;
}

h3.price-produto > span {
  background-color: #5a71bb;
  padding: 3px;
  border-radius: 2.5px;
}

.soma-produto {
  margin: 20px;
}
```

```jsx
var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click', () => {
  var nomeProduto = document.querySelector('input[name=nome_produto]');
  var precoProduto = document.querySelector('input[name=preco_produto]');
  // console.log(nomeProduto.value, precoProduto.value);
  items.push({
    nome: nomeProduto.value,
    preco: precoProduto.value
  });

  console.log(items[0].nome);
});
```