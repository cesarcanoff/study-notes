# Leitura avançada de arquivos e funções para String

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
const fs = require('fs');

fs.readFile('names.txt', (err, data) => {
  let word = data.toString();

  // let newStr = string.split('/');

  let newStr = word.substring(0, 5);
  console.log(newStr);
});
```