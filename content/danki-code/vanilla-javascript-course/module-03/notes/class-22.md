# Aula 22 - Trabalhando com Datas

```jsx
let actualYear = new Date().getFullYear(); // GET YEAR
let bornYear = prompt('Year you born: ');
while (bornYear >= actualYear) { // VALIDATE YEARS
  bornYear = bornYear = prompt(
    'Sorry, insert validate year\nYear you born: '
  );
}

let age = (actualYear - bornYear); // CALC AGE
alert(`Your have ${age} years old.`);
```