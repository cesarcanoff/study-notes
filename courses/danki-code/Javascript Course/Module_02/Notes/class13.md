# Aula 13 - ForEach - Como usar?

```jsx
// ForEach - Como usar?

let fruits = ['Grape', 'Apple', 'Banana', 'Watermellow', 'Orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log('FOR => ' + fruits[i]);
}

fruits.forEach((index, value) => {
  /*
    INDEX - INDICE DO VALOR NO ARRAY
    VALUE - VALOR ALOCADO NO INDEX.
  */
  console.log(index + ' => ' + value);
});
```