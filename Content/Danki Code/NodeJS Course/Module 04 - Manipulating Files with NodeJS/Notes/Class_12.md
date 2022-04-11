# Renomeando e deletando arquivos

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

// CRIAR ARQUIVO
fs.writeFile('names.txt', 'CésarKKKKx', (err) => {
  if (err) throw err;
  console.log('Criado com sucesso!');
});

// DELETAR ARQUIVO
  fs.unlink('names.txt', (err) => {
    if (err) throw err;
    console.log('Deletado com Sucesso!');
});

// RENOMEAR ARQUIVO
fs.rename('names.txt', 'rename.txt', (err) => {
  if (err) throw err;
  console.log('Renomeado com sucesso!');
});
```