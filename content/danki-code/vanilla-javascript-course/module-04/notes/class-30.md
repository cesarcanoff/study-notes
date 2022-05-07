# Aula 030 - Animações com JavaScript

```jsx
let boxHTML = document.querySelectorAll('.box')[0];

// ANIMAÇÃO DEPOIS DE 1 SEGUNDO!
setTimeout(() => {
  // ADICIONANDO CLASSE 'animLeft';
  boxHTML.classList.add('animLeft');
});

// ANIMAÇÃO APÓS O CLIQUE NO ELEMENTO!
addEventListener('click', () => {
  boxHTML.classList.add('animDown');
});
```