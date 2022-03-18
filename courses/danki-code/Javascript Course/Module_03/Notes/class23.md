# Aula 23 - Mais Sobre Datas com JavaScript

```jsx
// DATES
let date = new Date('03/06/2004');
let date_2 = new Date('03/06/2022');
let diff = (date_2.getTime() - date.getTime()) / (1000 * 3600 * 24);
console.log(diff);
```