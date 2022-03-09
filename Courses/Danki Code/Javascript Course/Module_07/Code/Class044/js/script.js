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