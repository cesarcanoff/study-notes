# Aula 033 - Block Scopes

```jsx
// BLOCK SCOPES
{
  let name = 'César';
  let testes = function () {
    console.log('Hello!');
  }
  // DENTRO DO ESCOPO
  testes();
}

// FORA DO ESCOPO
testes();
```