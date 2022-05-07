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