var span = document.querySelectorAll('.conteudo span');
for (let i = 0; i < span.length; i++) {
  span[i].addEventListener('click', () => {
    var conteudo = document.querySelectorAll('.conteudo p');
    if (conteudo[i].classList.contains('show')) {
      span[i].innerHTML = 'Ver Mais';
      conteudo[i].classList.remove('show');
    } else {
      span[i].innerHTML = 'Ver Menos';
      conteudo[i].classList.add('show');
    }
  });
}
