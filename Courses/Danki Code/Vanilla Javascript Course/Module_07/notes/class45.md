# Aula 044 - App Lista de Supermercado 3/3

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
      <input type="number" name="preco_produto" placeholder="Preço do Produto:" step="0.01" />
      <input type="submit" name="acao" value="Cadastrar" />
    </div>

    <div class="lista-produtos"></div>
    <div class="soma-produto">
      <h1>Total: R$0.00</h1>
    </div>

    <button name="clearCart">Clear All</button>
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

input {
  margin: 0 5px;
}

button[name='clearCart'] {
  background-color: #5a71bb;
  border: 0;
  padding: 10px;
  width: 100%;
}
```

```jsx
var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click', () => {
  var nomeProduto = document.querySelector('input[name=nome_produto]');
  var precoProduto = document.querySelector('input[name=preco_produto]');
  items.push({
    nome: nomeProduto.value,
    preco: precoProduto.value
  });
  
  
  let listaProdutos = document.querySelector('.lista-produtos');
  listaProdutos.innerHTML = '';
  let priceProducts = 0;
  items.map((val) => {
    priceProducts += parseFloat(val.preco);
    listaProdutos.innerHTML += `
    <div class="lista-produto-single">
      <h3>${val.nome}</h3>
      <h3 class="price-produto"><span>R$${val.preco}</span></h3>
    </div>
    `
  })

  priceProducts = priceProducts.toFixed(2);
  nomeProduto.value = '';
  precoProduto.value = '';

  let elementValue = document.querySelector('.soma-produto h1')
  elementValue.innerHTML = `R$${priceProducts}`;

  
});

let clear = document.querySelector('button[name=clearCart]');
clear.addEventListener('click', () => {
  items = [];
  document.querySelector('.lista-produtos').innerHTML = '';
  document.querySelector('.soma-produto h1').innerHTML = 'R$0.00'
})
```