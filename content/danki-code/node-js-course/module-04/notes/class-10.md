# Leitura Simples de Arquivos

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
  console.log(data.toString());
});
```