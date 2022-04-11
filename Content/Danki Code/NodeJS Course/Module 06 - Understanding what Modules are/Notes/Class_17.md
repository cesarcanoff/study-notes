# Criando Módulos 2/2

```jsx
const helloWorld = require('./helloWorld');

console.log(helloWorld.helloWorld());
console.log(helloWorld.numberOther);
console.log(helloWorld.objectFoo.job);
```

```jsx
const helloWorld = () => {
  return 'Hello, World!';
}

let number = 10;

const object = {
  name:  'César',
  age: 18,
  job: 'Software Engineering'
}

exports.helloWorld = helloWorld;
exports.numberOther = number;
exports.objectFoo = object;
```