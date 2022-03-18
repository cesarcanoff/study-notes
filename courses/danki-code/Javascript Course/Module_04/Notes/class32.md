# Aula 031 - Mais sobre animações com JavaScript

```jsx
// PEGANDO TODOS OS ELEMENTOS 'MORE' DO BOTÃO
var buttonAction = document.querySelectorAll('.conteudo span');

for (let i = 0; i < buttonAction.length; i++) {
  // ADICIONANDO O CLIQUE NO ELEMENTO DINÂMICO
  buttonAction[i].addEventListener('click', () => {
    // PEGANDO O ELEMENTO COM O INDEX CLICADO
    let conteudo = document.querySelectorAll('.conteudo p')[i];
    // VERIFICANDO SE EXISTE A CLASSE 'ShowContent' NO ELEMENTO
    if (conteudo.classList.contains('showContent')) {
      /*
      SE EXISTIR, QUANDO FOR CLICADA,
      OCULTARÁ O TEXTO E MUDARÁ O TEXTO DO BOTÃO PARA 'MORE'
      */
      conteudo.classList.remove('showContent');
      buttonAction[i].innerHTML = 'More';
    } else {
      /*
      SE NÃO EXISTIR, QUANDO FOR CLICADA,
      OCULTARÁ O TEXTO E MUDARÁ O TEXTO DO BOTÃO PARA 'CLOSE'
      */
      buttonAction[i].innerHTML = 'Close';
      conteudo.classList.add('showContent');
    }
  })
}
```