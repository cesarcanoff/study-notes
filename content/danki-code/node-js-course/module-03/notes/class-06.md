# Executando Arquivos Javascript com NodeJS

```jsx
{
  "name": "workspace",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

```jsx
console.log('Hello, World!');

const sum = (number_1, number_2) => {
  return (number_1 + number_2);
}

setInterval(() => {
  console.log('Fala Dev!');
}, 2000);

console.log(sum(5, 5));
```