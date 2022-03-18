# Aula 034 - Arrow Function

```jsx
// ARROWS FUNCTIONS

// JEITO PADRÃO
// function testes () {}

// ARROW FUNCTION

const func = (nameParam) => {
  console.log(`Hello! ${nameParam}`);
}

func('César');

const testes = (param) => {
  param('Olá Mundo');
}

testes((text) => {
  console.log(text + ' Function Inside function!');
});
```