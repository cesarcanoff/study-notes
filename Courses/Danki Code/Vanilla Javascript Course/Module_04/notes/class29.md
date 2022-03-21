# Aula 029 - Dominando querySelectorAll

```jsx
// PEGANDO O NODE DE ELEMENTOS DO HTML
let nodeEl = document.querySelectorAll('.testes > .inside-testes');

// ATRIBUINDO PARA VARIÁVEIS (DESCONTRUÇÃO!)
let elementIndexZero = nodeEl[0];
let elementIndexTwo = nodeEl[1];
let elementIndexThree = nodeEl[2];

// ESTILIZANDO OS ELEMENTOS ORIGINAIS DO NODE
elementIndexZero.style.color =  'green';
elementIndexZero.style.fontSize =  '45px';
elementIndexZero.style.fontWeight = 'bold';

// ESTILIZANDO OS ELEMENTOS ORIGINAIS DO NODE
elementIndexTwo.style.color =  '  yellow';
elementIndexTwo.style.fontSize =  '45px';
elementIndexTwo.style.fontWeight = 'bold';
elementIndexTwo.innerHTML = 'PAC-MAN';

// ESTILIZANDO OS ELEMENTOS ORIGINAIS DO NODE
elementIndexThree.innerHTML = 'SONIC';
elementIndexThree.style.color =  'darkblue';
elementIndexThree.style.fontSize =  '45px';
elementIndexThree.style.fontWeight = 'bold';
```