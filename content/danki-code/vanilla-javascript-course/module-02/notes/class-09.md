# Aula 09 - Condições

```jsx
// CONDIÇÕES
let num = 78;
let name = 'Joe';

if (name == 'César') {
  console.log('Hello, César');
} else if (name == 'Anna') {
  console.log("Hello, Anna");
} else {
  console.log("Who you are dude?");
}

/*
! - Diferente
= - Atribuição
== - Igualdade
=== - Igualdade entre valor e tipo primitivo
> - Maior que
< - Menor que
>= - Maior ou igual
<= - Menor que
*/

if (num <= 10) {
  console.log('YEAH');
} else {
  console.log("NO, YOU'RE WRONG!");
}

/*
&& - Adicionar mais uma validação (AND)
|| - Adicionar mais uma validação (OR)
*/

if (name != 'Filipe') {
  console.log('Hi Filipe!');
} else {
  console.log('Hi dude!');
}
```