# Aula 10 - Funções

```jsx
// FUNÇÕES

/* 
  DECLARANDO AS FUNÇÕES
  function test () {}
  let test = () => {}
  () => {}
*/

function tests (par) {
  console.log('Tests function call!');
  console.log('This is a param > ' + par);
}

// CALL THE FUNCTION
tests('anything');

function getName () {
  return 'César'; // RETURN ANYTHING...
}

console.log(getName());
```